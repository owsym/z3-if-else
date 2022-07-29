function goldbtn() {
    let gold = document.getElementById('goldWeight').value;
    if (gold>=7.5) {
        let goldZakat = gold*120000/40;
        document.getElementById('resultg').innerText=goldZakat; }
    else{
        document.getElementById('resultg').innerText="No Zakat is due on your gold";}
    }

    function silverbtn() {
        let silver = document.getElementById('silverWeight').value;
        if (silver>=52.5) {
            let silverZakat = silver*1500/40;
            document.getElementById('results').innerText=silverZakat; }
        else{
            document.getElementById('results').innerText="No Zakat is due on your silver";}
        }

        function cashbtn(){
            let cash = document.getElementById('netCash').value;
            if (cash>=78750) {
                let cashZakat = cash/40;
                document.getElementById('resultc').innerText=cashZakat; }
            else{
                document.getElementById('resultc').innerText="No Zakat is due on your cash";}
            }