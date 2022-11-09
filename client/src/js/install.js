const installButton = document.getElementById('buttonInstall');
const shareButton = document.getElementById('buttonShare');

// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installButton.style.visibility = 'visible';

    // click event handler on the `butInstall` element
    installButton.addEventListener('click', ( ) => {
        event.prompt();
        installButton.ariaDisabled = true
        installButton.textContent = 'Installed';
    })
});

//Handler for share event
shareButton.addEventListener('click', async() =>{

    const shareData = {
        title: 'JATE',
        text: 'Just another text editor',
      }

    try {
      shareData.url = window.location.href
      await navigator.share(shareData);
      console.log("👍👍👍 Text Editor app shared successfully")
    } catch (err) {
      console.error(err)
    }

})


//Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'J.A.T.E was installed successfully', event);
});
