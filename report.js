function printReport(pages) {
    console.log('============')
    console.log('REPORT')
    console.log('============')
    const sortedPages = sortPages(pages)
    for (const sortedPage of sortedPages) {
        const url = sortedPage[0]
        const count = sortedPage[1]
        console.log(`Found ${count} innternal links to ${url}`)
    }
}

// sort pages sorts a dictionary of pages
// into a list of tuples (url, count)
// with the heighest counts first in the list
function sortPages(pages) {
    const pagesArr = Object.entries(pages)
    pagesArr.sort((pageA, pageB) => {
        if (pageB[1] === pageA[1]) {
            return pageA[0].localeCompare(pageB[0])
        }
        return pageB[1] - pageA[1]
    })
    return pagesArr
}

export { printReport, sortPages }