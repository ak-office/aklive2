<script>
    const channelList = document.getElementById("channel-list");
    const iframeContainer = document.getElementById("iframe-container");
    let currentIframe = null;

    channelList.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        const src = event.target.getAttribute("data-src");
        iframeContainer.innerHTML = `<iframe src="${src}" allowfullscreen></iframe>`;
        if (currentIframe !== null) {
          currentIframe.remove();
        }
        currentIframe = iframeContainer.firstChild;
      }
    });
  </script>