$newBooksWrapper = $('#newBookItems');
var newItems = '';

$.getJSON("json/books.json", function (result) {
    var newBook = result;

    for(i = 0; i < newBook.length; i++){
        if(newBook[i].atribute == 'new'){
            newItems += `<div class="bookItem col-6 col-md 4 col-xl-3">
                        <div class="imgWrapper"><img src="img/${newBook[i].img}" alt="" class="img-fluid"></div>
                            <div class="textWrapper">
                              <ul>
                                <li class="itemName">${newBook[i].name}</li>
                                <li class="itemPrice">${newBook[i].price}</li>
                                <li><a class="addItem" href="">Kupite</a></li>
                              </ul>
                            </div>
                        </div>` 
        }
    }

    $newBooksWrapper.html(newItems);
});
