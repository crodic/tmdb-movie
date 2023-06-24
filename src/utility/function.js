
//Scroll to Element
export const scrollToContent = (contentOffset) => {
    if (contentOffset) {
        const mainElement = contentOffset;
        const rect = mainElement.getBoundingClientRect(); //Lấy ra các thuộc tính window scroll của phần tử
        const scrollTop =
            window.scrollY || document.documentElement.scrollTop; // Lấy ra vị trí của phần tử tính từ đỉnh của trình duyệt
        const elementTop = rect.top + scrollTop; //Tìm ra vị trí tuyệt đối của phần tử
        window.scrollTo({
            top: elementTop,
            behavior: "smooth",
        });
    }
};


//UpperCase text
export const capitalizeFirstLetter = (str) => {
    const words = str.split(" ");

    const capitalizedWords = words.map((word) => {
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word;
    });
    const capitalizedStr = capitalizedWords.join(" ");
    return capitalizedStr;
}