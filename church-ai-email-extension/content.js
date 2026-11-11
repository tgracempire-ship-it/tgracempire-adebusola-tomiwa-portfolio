// Content script: Extract emails and potential church name from current page
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "extractChurchData") {
    const pageText = document.body ? document.body.innerText : "";
    const pageTitle = document.title || "";

    // Regex for emails on page
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi;
    const matches = pageText.match(emailRegex) || [];
    
    // Also look for mailto: links in <a> tags
    const mailtoLinks = Array.from(document.querySelectorAll('a[href^="mailto:"]')).map(a => {
      return a.href.replace(/^mailto:/i, '').split('?')[0].trim();
    });

    const allEmails = Array.from(new Set([...matches, ...mailtoLinks]))
      .filter(e => !e.endsWith('.png') && !e.endsWith('.jpg') && !e.endsWith('.svg') && !e.includes('sentry') && !e.includes('wixpress'));

    // Try to guess church name from title or h1
    let guessedName = "";
    const h1 = document.querySelector('h1');
    if (h1 && h1.innerText.trim().length > 3 && h1.innerText.trim().length < 50) {
      guessedName = h1.innerText.trim();
    } else if (pageTitle) {
      guessedName = pageTitle.split(/[-|–•]/)[0].trim();
    }

    sendResponse({
      emails: allEmails,
      guessedName: guessedName,
      title: pageTitle,
      url: window.location.href
    });
  }
  return true;
});
