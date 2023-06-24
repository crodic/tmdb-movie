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