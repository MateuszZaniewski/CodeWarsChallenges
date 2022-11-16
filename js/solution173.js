// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead


function bump(x){
    let bumps = 0
    x.split('').forEach((el) => {
        if(el == 'n'){bumps++}
        else{return el}
    })
    return bumps <= 15 ? 'Woohoo!' : 'Car Dead'
}

console.log(bump("__nn_nnnn__n_n___n____nn__nnn"))