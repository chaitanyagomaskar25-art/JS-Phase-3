function openProject(id, url) {
            const btn = document.getElementById(id);
            btn.addEventListener("click", () => {
                btn.classList.add('loading');
                const originalText = btn.innerHTML;
                btn.innerHTML = "Opening Project...";
                
                setTimeout(() => {
                    window.location.href = url;
                    btn.innerText = originalText;
                }, 800);
            });
        }

        openProject("quizApp", "quize/home.html");
        openProject("randomQouteGenerator", "RandomQuote.html");
        openProject("tipCalculator", "TipCalculator.html");
        openProject("toDoList", "To-Do-tool.html");
