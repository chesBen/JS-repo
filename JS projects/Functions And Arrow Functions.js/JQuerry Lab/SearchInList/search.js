function search(){
    let targetValue = $('#searchText').val()
    if (targetValue.trim() !== ''){
        $('#towns li').css('font-weight', '')
        let arr = $(`#towns li:contains(${targetValue})`)
        arr.css('font-weight', 'bold')
        $('#result').text(arr.length + ' matches found')
    }
}