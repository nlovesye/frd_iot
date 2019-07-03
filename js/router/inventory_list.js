$(function() {
    console.log('success')
    var data = []
    var columns = [
        {
            title: 'a',
            data: 'a',
            defaultContent: ''
        },
        {
            title: 'b',
            data: 'b',
            defaultContent: ''
        },
        {
            title: 'c',
            data: 'c',
            defaultContent: ''
        },
        {
            title: 'd',
            data: 'd',
            defaultContent: ''
        },
        {
            title: 'e',
            data: 'e',
            defaultContent: ''
        },
        {
            title: 'f',
            data: 'f',
            defaultContent: ''
        },
    ]
    for (let i = 0; i < 50; i++) {
        data.push({
            a: 'a' + i,
            b: 'b' + (i + 2),
            c: 'c' + i,
            d: 'd' + i,
            e: 'e' + i,
        })
        
    }
    // $('#tb').DataTable({
    //     data: data,
    //     columns: columns
    // })
    $('#example').DataTable();
    
    console.log('success22')
})