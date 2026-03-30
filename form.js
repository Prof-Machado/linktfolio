document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
    timestamp: new Date().toISOString()
  };

  try {
    const response = await fetch("/.netlify/functions/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      alert("Formulário enviado com sucesso!");
      form.reset();
    } else {
      alert("Erro ao enviar formulário.");
      console.error(result.error);
    }

  } catch (err) {
    console.error(err);
    alert("Erro na conexão.");
  }
});
