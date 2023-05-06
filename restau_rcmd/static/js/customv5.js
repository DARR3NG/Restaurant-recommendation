let autocomplete;

function initAutoComplete(){
autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('id_address'),
    {
        types: ['geocode', 'establishment'],
        //default in this app is "IN" - add your country code
        componentRestrictions: {'country': ['MA','us']},
    })
// function to specify what should happen when the prediction is clicked
autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged (){
    var place = autocomplete.getPlace();

    // User did not select the prediction. Reset the input field or alert()
    if (!place.geometry){
        document.getElementById('id_address').placeholder = "Start typing...";
    }
    else{
        //console.log('place name=>', place.name)
    }
    // get the address components and assign them to the fields
    console.log(place)
    var gecoder=new google.maps.Geocoder()
    var address = document.getElementById('id_address').value
    console.log('address =>'+address)


    gecoder.geocode({'address':address},function(results, status){
        console.log('result=>', results)
        console.log('status=>', status)


        if(status == google.maps.GeocoderStatus.OK){
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();

            console.log('lat =>',latitude);
            console.log('lng =>',longitude);
            $('#id_address').val(address);
            

            $('#id_latitude').val(latitude);
            $('#id_longitude').val(longitude);
            
        }

    });

    //loop through the address  components and assign address data
    console.log('place => '+place.address_components);

    for(var i=0;i<place.address_components.length;i++){
        for(var j=0;j<place.address_components[i].types.length;j++){
            //get country
            if(place.address_components[i].types[j] == 'country'){
                console.log('country =>',place.address_components[i].long_name);
                $('#id_country').val(place.address_components[i].long_name); 
            }   

            //get state
            if(place.address_components[i].types[j] == 'administrative_area_level_1'){
                console.log('country =>',place.address_components[i].long_name);
                $('#id_state').val(place.address_components[i].long_name); 
            }   

            //get city
            if(place.address_components[i].types[j] == 'locality'){
                console.log('country =>',place.address_components[i].long_name);
                $('#id_city').val(place.address_components[i].long_name); 
            }   
              //get pin code
              if(place.address_components[i].types[j] == 'postal_code'){
                console.log('country =>',place.address_components[i].long_name);
                $('#id_pin_code').val(place.address_components[i].long_name); 
            }   
            else{
                $('#id_pin_code').val(""); 
            }

        }
    }
}



$(document).ready(function(){
    $('.add_to_cart').on('click',function(e){
        e.preventDefault();
        console.log('test123');
        food_id=$(this).attr('data-id');
        url=$(this).attr('data-url');
        data={
            food_id:food_id,

                
        }
        $.ajax({
            type: 'GET',
            url:url,
            data:data,
            success:function(response){
                console.log(response)
                console.log(food_id)
                if(response.status=='login_required'){
                    swal(response.message,'','info')
                }
                else if(response.status=='Failed'){
                    swal(response.message,'','error')
                    
                

                }else{
                    console.log(response.cart_count['cart_count'])
                    $('#cart_counter').html(response.cart_count['cart_count']);
                    $('#qty-'+food_id).html(response.qty);
                        //totale
                        
                       // console.log('cart amount =>',response.cart_amount['grand_Total']);
                        cartAmount(response.cart_amount['grand_Total']);
                }
            }
         

        })
    })

    //quantity
    $('.item-qty').each(function(){
        var id=$(this).attr('id')
        var qty=$(this).attr('data-qty')
        console.log(qty)
        $('#'+id).html(qty)
    })


    //decrease cart
    $('.decrease_cart').on('click',function(e){
        e.preventDefault();
        console.log('test123');
        food_id=$(this).attr('data-id');
        url=$(this).attr('data-url');
        data={
            food_id:food_id,

                
        }
        $.ajax({
            type: 'GET',
            url:url,
            data:data,
            success:function(response){
                console.log(response)
                console.log(food_id)
                if(response.status=='login_required'){
                    swal(response.message,'','info')
                }
                 if(response.status=='Failed'){
                    swal(response.message,'','error')
                }
                else{
                    console.log(response.cart_count['cart_count'])
                    $('#cart_counter').html(response.cart_count['cart_count']);
                    $('#qty-'+food_id).html(response.qty);
                    //console.log('cart amount =>',response.cart_amount['grand_Total']);
                        cartAmount(response.cart_amount['grand_Total']);
                }
         
            }
        })
    })

    //delete cart item
    $('.delete_cart').on('click',function(e){
        e.preventDefault();
        console.log('test123');
        cart_id=$(this).attr('data-id');
        url=$(this).attr('data-url');
        data={
            cart_id:cart_id,

                
        }
        $.ajax({
            type: 'GET',
            url:url,
            data:data,
            success:function(response){
                console.log(response)
               console.log(cart_id)
                if(response.status=='login_required'){
                    swal(response.message,'','info')
                }
                else if(response.status=='Failed'){
                    swal(response.message,'','error')

                }else{
                
                   
                    swal(response.status, response.message, "success")
                    removeCartItem(0,cart_id);
                    checkEmptyCart();
                   // console.log('cart amount =>',response.cart_amount['grand_Total']);
                        cartAmount(response.cart_amount['grand_Total']);
                
                }
            }
         

        })
    })



        // delete the cart element if the qty is 0
        function removeCartItem(cartItemQty, cart_id){
            if(cartItemQty <= 0){
                // remove the cart item element
                document.getElementById("cart-item-"+cart_id).remove()
            }
        
    }


        // Check if the cart is empty
        function checkEmptyCart(){
            var cart_counter = document.getElementById('cart_counter').innerHTML
            if(cart_counter == 0){
                document.getElementById("empty-cart").style.display = "block";
            }
        }

        //cart amount
        function cartAmount(Totale){    
            
            //console.log('totale => ',Totale)
            $('#total').html(Totale)
            
        }

});
