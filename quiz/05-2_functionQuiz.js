function result(score) {
    if (score >= 90) {
        console.log('A');
    } else if (score >= 80) {
        console.log('B')
    } else if (score >= 70) {
        console.log('C')
    } else if (score >= 60) {
        console.log('D')
    } else {
        console.log('F')
    }
}

result(89);
result(68);
result(98);