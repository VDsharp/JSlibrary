# JSlibrary

Exemple d'utilisation en import

#exemple.html --> on import le js en type module
<script src="~/js/site.js" type="module" asp-append-version="true"></script>

#

#site.js --> on import uniquement les fonction que dont on a besoin
import { noenterkey } from './modules/JSlindium.js';
document.addEventListener('keypress', function () {  
    noenterkey();
});


