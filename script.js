const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    Notification.requestPermission().then(prem => {
        if (prem => 'granted') {
            new Notification('Hello')
        }
    })
})
