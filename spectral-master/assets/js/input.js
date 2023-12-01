let divTyping = document.getElementById('inputing')
let i = 0, timer = 0, str = divTyping.innerHTML

function typing() {
    if (i <= str.length) {
        loading = str.slice(0, i++) + '_' + '<span style="visibility:hidden;">' + str.slice(i - 1) + '</span>\xa0'
        divTyping.innerHTML = loading
        // console.log(loading)
        timer = setTimeout(typing, 75)
    }
    else {
        divTyping.innerHTML = str + `
            <style>
                @keyframes blink {
                    0% { opacity: 0; }
                    49% { opacity: 0; }
                    50% { opacity: 1; }
                    99% { opacity: 1; }
                    100% { opacity: 0; }
                }
                
                .show_hide {     
                    animation: blink 0.9s;
                    animation-iteration-count: infinite;
                }
            </style>` + '<spwn class="show_hide">_</spwn>'
        // console.log(divTyping.innerHTML)
        clearTimeout(timer)
    }
}

divTyping.innerHTML = `
            <style>
                @keyframes blink {
                    0% { opacity: 0; }
                    49% { opacity: 0; }
                    50% { opacity: 1; }
                    99% { opacity: 1; }
                    100% { opacity: 0; }
                }
                
                .show_hide {     
                    animation: blink 0.9s;
                    animation-iteration-count: infinite;
                }
            </style>` + '<spwn class="show_hide">_</spwn>' + '<span style="visibility:hidden;">' + str + '</span>\xa0'

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const repeatedGreetings = async () => {
    await sleep(1500)
    // console.log(1)

    typing()
}

repeatedGreetings()


