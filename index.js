export default {
  async fetch(request) {
    const userAgent = request.headers.get("user-agent") || "";
    const ip = request.headers.get("cf-connecting-ip") || "";

    const botUAs = [
      "facebookexternalhit", "facebot", "facebookbot", "adsbot",
      "googlebot", "bingbot", "twitterbot", "linkedinbot", "slackbot",
      "whatsapp", "telegrambot", "crawler", "spider", "headless",
      "phantom", "python", "curl", "wget", "java/", "apache-httpclient"
    ];
    const metaIPs = [
      "66.220.", "69.63.", "69.171.", "173.252.",
      "31.13.", "157.240.", "179.60.", "204.15."
    ];

    const isBot = botUAs.some((b) => userAgent.toLowerCase().includes(b));
    const isMeta = metaIPs.some((p) => ip.startsWith(p));

    if (isBot || isMeta) {
      return new Response(null, {
        status: 302,
        headers: { Location: "https://grupojogadorcaro.com.br/quem-e-ramon" }
      });
    }

    const numeros = [
      //"5531936184908", // R19
      //"5531936184911", // R20
      //"5531936184912", // R21
      //"5531936184913", // R22
      //"5531936184914", // R23
      //"5531936184915", // R24

      "5531936184917", // R25
      "5531936180897", // R26
      "5531936181076", // R27
      "5531936182476", // R28
      "5531936183164", // R29
      "5531936183294", // R30
    ];

    const mensagens = [
      "Fala Ramon, libera a boa de hoje pra eu comecar junto nessa!",
      "E ai Ramon, me libera a oportunidade de hoje que eu quero comecar!",
      "Ramon, libera a entrada de hoje ai que eu quero comecar agora!",
      "Fala Ramon, libera aquela boa de hoje que eu quero comecar!",
      "E ai Ramon, libera a analise de hoje pra eu comecar junto!",
      "Ramon, me libera a boa de hoje que eu to pronto pra comecar!"
    ];

    const numero = numeros[Math.floor(Math.random() * numeros.length)];
    const mensagem = encodeURIComponent(
      mensagens[Math.floor(Math.random() * mensagens.length)]
    );

    const url = /Android|iPhone|iPad/i.test(userAgent)
      ? `whatsapp://send?phone=${numero}&text=${mensagem}`
      : `https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`;

    return new Response(null, {
      status: 302,
      headers: { Location: url }
    });
  },
};