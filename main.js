let wallet = window.cardano;
    console.log(wallet);
    async function ConnectNami() {
        let nami = window.cardano.nami;
        console.log(nami);
        let  api = await window.cardano.nami.enable();
        console.log(api);
        console.log(await api.getUsedAddresses([0]))
    }
    async function ConnectEternl() {
        let et = window.cardano.eternl;
        console.log(et);
        let  api = await window.cardano.eternl.enable();
        console.log(api);
        console.log(await api.getUsedAddresses([0]))
    }
    
    async function pay() {
        let paid = await cardano.dataSign('addr1qxhfsw5jzvjewu7t32w7q35r5nap5hg89annkytgse60fh0r2rt5sp8c5r2mq5se7max7475u0dea4mnsfu4wdpcszns0xu7wd',8000);
        console.log()
    }

