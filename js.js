
        var items = [
            ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpeg'], 
            ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpeg'],
            ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
            ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpeg']
        ];
        var catalog = $("#listBarang");

        function emptyKey() 
        {
            
            catalog.html("");
            for(data of items)
            {

                results = '<div class="card m-3" style="width: 18rem; height:auto"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title" id="itemName"> Nama </h5><p class="card-text" id="itemDesc">Deskripsi barang</p><p class="card-text">Rp Harga</p><a href="#" class="btn btn-primary" id="addCart" onClick="addCart(&#39;name&#39;,&#39;price&#39;);">Tambahkan ke keranjang</a></div></div>';
                results = results.replace("Nama", data[1]);
                results = results.replace("name", data[1]);
                results = results.replace("...", "img/"+data[4]);
                results = results.replace("Deskripsi barang", data[3]);
                results = results.replace("Harga", data[2]);
                results = results.replace("price", data[2]);
                catalog.append(results);
            }
        }
        function searchKey(argument) 
        {
            catalog.html("");
            var newRec = items.filter(function(el){
                return el.toString().toLowerCase().indexOf(argument.toLowerCase()) !== -1;
            });
            for(data of newRec)
            {
                results = '<div class="card m-3" style="width: 18rem;"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title" id="itemName"> Nama </h5><p class="card-text" id="itemDesc">Deskripsi barang</p><p class="card-text">Rp Harga</p><a href="#" class="btn btn-primary" id="addCart" onClick="addCart()">Tambahkan ke keranjang</a></div></div>';
                results = results.replace("Nama", data[1]);
                results = results.replace("...", "img/"+data[4]);
                results = results.replace("Deskripsi barang", data[3]);
                results = results.replace("Harga", data[2]);
                catalog.append(results);
            }
        }
        var basket;
        $(document).ready(function() 
        {             
            var keyword = $("#keyword").text();     
            (keyword == "")? emptyKey() : searchKey(keyword);
            basket = 0;
            $("#basket").text(basket);  
            
        });
        $( "#searchItem" ).click(function(e) 
        {
            var keyword = $("#keyword").val();
            searchKey(keyword);
        }); 
        var total = 0;
        function addCart(name, price) 
        {
            basket  = basket + 1;
            $("#basket").text(basket);
            price = parseInt(price);
            var rows = "<tr><td>"+name+" = </td><td>"+price+"</td><tr>"
            var list = $("#tableList");
            list.append(rows);
            var jumlah = sum(price);
            $("#totalHarga").text(jumlah);
            console.log(jumlah);
        }
        $("#cart").click(function(e){
            $('#cartModal').modal('show');
        });

        
        
        function sum(harga){
            total = total + harga;
            return total;
        }
