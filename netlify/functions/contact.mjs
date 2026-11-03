
export default async (req) => {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ success: false, error: "Method not allowed" }),
      { status: 405, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const {
      fullName,
      email,
      phone,
      legalMatter,
      message,
    } = await req.json();

    if (!fullName || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Please fill in all required fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const apiKey = Netlify.env.get("RESEND_API_KEY");

    if (!apiKey) {
      throw new Error("Email service is not configured.");
    }

    const escapeHtml = (value = "") =>
      String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char]);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Rahm Law Website <onboarding@resend.dev>",
        to: ["Rahmesq@gmail.com"],
        subject: "New Client Inquiry - Rahm Law Group, APC",
        reply_to: email,
        html: `
          <h2>New Website Inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Legal Matter:</strong> ${escapeHtml(legalMatter)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend error:", result);
      throw new Error("Email could not be sent.");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: "Unable to send your message. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
