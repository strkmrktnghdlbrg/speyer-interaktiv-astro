// Kanonische Host-Weiterleitung (www -> Apex) fuer Cloudflare Pages.
// Laeuft vor den statischen Assets fuer jeden Request; Pfad + Query bleiben erhalten.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "www.speyer-interaktiv.de") {
    url.hostname = "speyer-interaktiv.de";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
