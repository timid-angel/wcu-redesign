document.addEventListener("DOMContentLoaded", function () {
    const advancedSearchToggle = document.getElementById("advancedSearchToggle");
    const advancedSearchOptions = document.getElementById("advancedSearchOptions");
    const dropDown =document.getElementById("dropDown") 

    advancedSearchToggle.addEventListener("click", function () {
        advancedSearchOptions.classList.toggle("hidden");
        dropDown.classList.toggle("-rotate-180")
        
    });
});