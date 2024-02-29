// Data Fetch Load Step ::1
const dataFetchLoad = async(inputText)=>{
    const res = await fetch
    (`https://openapi.programming-hero.com/api/phones?search=${inputText}`);
    const data = await res.json();
    const phone = data.data
    showAllData(phone)
    
}





// Show Data Loading and Browsing Step ::2
const showAllData = (phones) =>{
    const mainCardContainer = document.getElementById('main_card_container');
    mainCardContainer.textContent = '';
    const showPhone = document.getElementById('show_all_phone');
    if(phones.length > 10){
        showPhone.classList.remove('hidden')
    }else{
        showPhone.classList.add('hidden')
    }

    phones.slice(0,5)
    phones.forEach(phon =>{
        console.log(phon)
        const cardArea = document.createElement('div');
        cardArea.classList = 'card  shadow-xl';
        cardArea.innerHTML = `
        <figure><img src="${phon.image}" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${phon.phone_name}</h2>
                    <h2 class="card-title">${phon.brand}</h2>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Details</button>
                </div>
            </div>
        `
        mainCardContainer.appendChild(cardArea)
        showLoading(false)
    })
}

// Search Kore Phone pawar Function eta search button a onclick a use korbo
// Step :: 3
const handleSearch = ()=>{
    showLoading(true)
    const inputValue = document.getElementById('input_value');
    const inputText = inputValue.value;
    console.log(inputText)
    dataFetchLoad(inputText) 
    
}
// Loading area step :: 4
const showLoading = (isLoading) =>{
    const showLoad = document.getElementById('loading');
    if(isLoading){
        showLoad.classList.remove('hidden')
    }else{
        showLoad.classList.add('hidden')
    }
}

//  Step :: 4 
const showAllPhone = () =>{
    handleSearch(true)
}

// dataFetchLoad();