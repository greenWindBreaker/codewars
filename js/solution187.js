//solution187

function DNAStrand (dna){
    let result = ''
    for(let i =0; i < dna.length;i++){
        if(dna[i]==='A'){
            result += 'T'
        }else if(dna[i] === 'G'){
            result += 'C'
        }else if(dna[i]==='T'){
            result += 'A'
        }else if(dna[i]==='C'){
            result += 'G'
        }else{
            result += dna[i]
        }
    }
    return result
}

console.log(DNAStrand('ATGC'))//TACG
console.log(DNAStrand('AAAT'))//TTTA
console.log(DNAStrand('ATTGC'))//TAACG