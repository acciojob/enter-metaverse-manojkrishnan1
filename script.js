//your JS code here. If required.
let para = document.getElementById('status');
        
        // console.log(para.innerHTML);
        function change(){
            para.innerHTML = '';
            let h = document.createElement('h1');
            h.innerHTML = 'Entered Metaverse';
            para.append(h);
		}