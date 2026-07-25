/**
 * i18n.js
 * Isolated module that controls the interface language.
 * It knows nothing about projects or app storage: it only translates text
 * and remembers the user's preference. Load it before app.js.
 */

const I18N_STORAGE_KEY = 'forge-ai-language';
const DEFAULT_LANGUAGE = 'en'; // default to English

const I18N_DICTIONARY = {
    en: {
        'app.title': 'Forge AI',
        'sidebar.newProject': 'New project',
        'sidebar.projects': 'Projects',
        'sidebar.empty': 'You don\'t have any projects yet.<br>Create your first one above.',
        'main.heading': 'Make your own prompt!',
        'main.greeting': (name) => `Welcome to Forge AI, ${name}!`,
        'main.subheading': 'Write down your core instructions to build your private LLM template.',
        'main.placeholder': 'Define system rules, persona, formatting style...',
        'main.placeholderEmpty': 'Write something before running...',
        'main.typewriter': [
            'Make a shift-to-run system with a stamina bar UI...',
            'Create a round-based minigame system...',
            'Design a combat system with combo attacks...',
            'Generate a plot management system for a tycoon...',
            'Write a script for an advanced dialogue system...'
        ],
        'toast.success': 'Prompt sent.',
        'contextMenu.rename': 'Rename',
        'contextMenu.delete': 'Delete',
        'confirmModal.deleteTitle': 'Delete project',
        'confirmModal.deleteMessage': (name) => `Are you sure you want to delete "${name}"? This can\'t be undone.`,
        'confirmModal.deleteConfirm': 'Delete',
        'confirmModal.cancel': 'Cancel',
        'settings.title': 'Settings',
        'settings.language': 'Language',
        'settings.clearData': 'Clear all data',
        'settings.clearDataDesc': 'Deletes all saved projects',
        'settings.clearButton': 'Clear',
        'settings.clearTitle': 'Clear all data',
        'settings.clearMessage': 'All projects saved in this browser will be deleted. This can\'t be undone.',
        'settings.clearConfirm': 'Clear everything',
        'login.title': 'Welcome to Forge AI',
        'login.subtitle': 'Sign in to start building your prompts.',
        'login.namePlaceholder': 'Your name',
        'login.emailPlaceholder': 'you@email.com',
        'login.submit': 'Continue',
        'login.note': 'Demo only — nothing is sent anywhere, this stays on your device.',

        'app.footer': 'Forge AI can make mistakes. Verify important info.',
        'profile.settings': 'Settings',
        'profile.language': 'Language',
        'profile.logout': 'Log out',
        'model.selector.effort': 'Effort',
        'model.selector.thinking': 'Thinking',
        'model.selector.thinkingDesc': 'Reason before responding',
        'model.selector.moreModels': 'More models',
        'model.selector.back': '← Models',
        'settings.search': 'Search',
        'settings.configSection': 'Configuration',
        'settings.customizeSection': 'Customize',
        'settings.nav.general': 'General',
        'settings.nav.account': 'Account',
        'settings.nav.privacy': 'Privacy',
        'settings.nav.language': 'Language',
        'settings.nav.data': 'Data',
        'settings.general.profile': 'Profile',
        'settings.general.fullName': 'Full name',
        'settings.general.nickname': 'How do you want Forge to call you?',
        'settings.general.job': 'What best describes your job?',
        'settings.general.instructions': 'Instructions for Forge',
        'settings.general.instructionsDesc': 'Forge will keep this in mind in all chats.',
        'settings.general.instructionsPlaceholder': 'e.g. keep explanations brief and accurate',
        'settings.general.preferences': 'Preferences',
        'settings.general.appearance': 'Appearance',
        'settings.account.title': 'Account',
        'settings.account.email': 'Email:',
        'settings.account.logout': 'Log out',
        'settings.privacy.title': 'Privacy',
        'settings.privacy.desc': 'Your data is stored locally in your browser. We do not share information with third parties.',
        'settings.language.title': 'Language',
        'settings.data.title': 'Data',
        'settings.data.desc': 'Delete all your projects and saved data.',
        'settings.data.clearButton': 'Clear all data',
        'profile.changePhoto': 'Change photo',
        'profile.removePhoto': 'Remove photo',
        'profile.photoHint': 'PNG or JPG, up to 5MB.',
        'profile.photoError': 'Could not load that image. Try a PNG or JPG under 5MB.'
    },
    es: {
        'app.title': 'Forge AI',
        'sidebar.newProject': 'Nuevo proyecto',
        'sidebar.projects': 'Proyectos',
        'sidebar.empty': 'Aún no tienes proyectos.<br>Crea el primero arriba.',
        'main.heading': '¡Crea tu propio prompt!',
        'main.greeting': (name) => `¡Bienvenido a Forge AI, ${name}!`,
        'main.subheading': 'Escribe tus instrucciones base para construir tu plantilla privada de LLM.',
        'main.placeholder': 'Define reglas del sistema, persona, estilo de formato...',
        'main.placeholderEmpty': 'Escribe algo antes de ejecutar...',
        'main.typewriter': [
            'Crea un sistema de correr con shift y barra de estamina...',
            'Haz un sistema de minijuegos por rondas...',
            'Diseña un sistema de combate con ataques en combo...',
            'Genera un sistema de gestión de parcelas para un tycoon...',
            'Escribe un script para un sistema avanzado de diálogos...'
        ],
        'toast.success': 'Prompt enviado.',
        'contextMenu.rename': 'Renombrar',
        'contextMenu.delete': 'Eliminar',
        'confirmModal.deleteTitle': 'Eliminar proyecto',
        'confirmModal.deleteMessage': (name) => `¿Seguro que quieres eliminar "${name}"? No podrás deshacerlo.`,
        'confirmModal.deleteConfirm': 'Eliminar',
        'confirmModal.cancel': 'Cancelar',
        'settings.title': 'Configuración',
        'settings.language': 'Idioma',
        'settings.clearData': 'Borrar todos los datos',
        'settings.clearDataDesc': 'Elimina todos los proyectos guardados',
        'settings.clearButton': 'Borrar',
        'settings.clearTitle': 'Borrar todos los datos',
        'settings.clearMessage': 'Se eliminarán todos los proyectos guardados en este navegador. No se puede deshacer.',
        'settings.clearConfirm': 'Borrar todo',
        'login.title': 'Bienvenido a Forge AI',
        'login.subtitle': 'Inicia sesión para empezar a crear tus prompts.',
        'login.namePlaceholder': 'Tu nombre',
        'login.emailPlaceholder': 'tu@correo.com',
        'login.submit': 'Continuar',
        'login.note': 'Solo demo — nada se envía a ningún lado, se queda en tu dispositivo.',

        'app.footer': 'Forge AI puede cometer errores. Verifica la info importante.',
        'profile.settings': 'Configuración',
        'profile.language': 'Idioma',
        'profile.logout': 'Cerrar sesión',
        'model.selector.effort': 'Esfuerzo',
        'model.selector.thinking': 'Pensamiento',
        'model.selector.thinkingDesc': 'Razona antes de responder',
        'model.selector.moreModels': 'Más modelos',
        'model.selector.back': '← Modelos',
        'settings.search': 'Buscar',
        'settings.configSection': 'Configuración',
        'settings.customizeSection': 'Personalizar',
        'settings.nav.general': 'General',
        'settings.nav.account': 'Cuenta',
        'settings.nav.privacy': 'Privacidad',
        'settings.nav.language': 'Idioma',
        'settings.nav.data': 'Datos',
        'settings.general.profile': 'Perfil',
        'settings.general.fullName': 'Nombre completo',
        'settings.general.nickname': '¿Cómo quieres que Forge te llame?',
        'settings.general.job': '¿Qué describe mejor tu trabajo?',
        'settings.general.instructions': 'Instrucciones para Forge',
        'settings.general.instructionsDesc': 'Forge tendrá esto en cuenta en todos los chats.',
        'settings.general.instructionsPlaceholder': 'p. ej. mantener las explicaciones breves y precisas',
        'settings.general.preferences': 'Preferencias',
        'settings.general.appearance': 'Apariencia',
        'settings.account.title': 'Cuenta',
        'settings.account.email': 'Email:',
        'settings.account.logout': 'Cerrar sesión',
        'settings.privacy.title': 'Privacidad',
        'settings.privacy.desc': 'Tus datos se almacenan localmente en tu navegador. No compartimos información con terceros.',
        'settings.language.title': 'Idioma',
        'settings.data.title': 'Datos',
        'settings.data.desc': 'Elimina todos tus proyectos y datos guardados.',
        'settings.data.clearButton': 'Borrar todos los datos',
        'profile.changePhoto': 'Cambiar foto',
        'profile.removePhoto': 'Quitar foto',
        'profile.photoHint': 'PNG o JPG, hasta 5MB.',
        'profile.photoError': 'No pudimos cargar esa imagen. Prueba con un PNG o JPG de menos de 5MB.'
    },
    fr: {
        'app.title': 'Forge AI',
        'sidebar.newProject': 'Nouveau projet',
        'sidebar.projects': 'Projets',
        'sidebar.empty': 'Vous n\'avez encore aucun projet.<br>Créez le premier ci-dessus.',
        'main.heading': 'Créez votre propre prompt !',
        'main.greeting': (name) => `Bienvenue sur Forge AI, ${name} !`,
        'main.subheading': 'Rédigez vos instructions de base pour créer votre modèle LLM privé.',
        'main.placeholder': 'Définissez les règles du système, la persona, le style de formatage...',
        'main.placeholderEmpty': 'Écrivez quelque chose avant d\'exécuter...',
        'main.typewriter': [
            'Crée un système de course avec barre d\'endurance...',
            'Crée un système de mini-jeux par manches...',
            'Conçois un système de combat avec des combos...',
            'Génère un système de gestion de terrains pour un tycoon...',
            'Écris un script pour un système de dialogues avancé...'
        ],
        'toast.success': 'Prompt envoyé.',
        'contextMenu.rename': 'Renommer',
        'contextMenu.delete': 'Supprimer',
        'confirmModal.deleteTitle': 'Supprimer le projet',
        'confirmModal.deleteMessage': (name) => `Voulez-vous vraiment supprimer "${name}" ? Cette action est irréversible.`,
        'confirmModal.deleteConfirm': 'Supprimer',
        'confirmModal.cancel': 'Annuler',
        'settings.title': 'Paramètres',
        'settings.language': 'Langue',
        'settings.clearData': 'Effacer toutes les données',
        'settings.clearDataDesc': 'Supprime tous les projets enregistrés',
        'settings.clearButton': 'Effacer',
        'settings.clearTitle': 'Effacer toutes les données',
        'settings.clearMessage': 'Tous les projets enregistrés dans ce navigateur seront supprimés. Action irréversible.',
        'settings.clearConfirm': 'Tout effacer',
        'login.title': 'Bienvenue sur Forge AI',
        'login.subtitle': 'Connectez-vous pour créer vos prompts.',
        'login.namePlaceholder': 'Votre nom',
        'login.emailPlaceholder': 'vous@email.com',
        'login.submit': 'Continuer',
        'login.note': 'Démo uniquement — rien n\'est envoyé, tout reste sur votre appareil.',
        'app.footer': 'Forge AI peut faire des erreurs. Vérifiez les informations importantes.',
        'profile.settings': 'Paramètres',
        'profile.language': 'Langue',
        'profile.logout': 'Se déconnecter',
        'model.selector.effort': 'Effort',
        'model.selector.thinking': 'Réflexion',
        'model.selector.thinkingDesc': 'Réfléchit avant de répondre',
        'model.selector.moreModels': 'Plus de modèles',
        'model.selector.back': '← Modèles',
        'settings.search': 'Rechercher',
        'settings.configSection': 'Configuration',
        'settings.customizeSection': 'Personnaliser',
        'settings.nav.general': 'Général',
        'settings.nav.account': 'Compte',
        'settings.nav.privacy': 'Confidentialité',
        'settings.nav.language': 'Langue',
        'settings.nav.data': 'Données',
        'settings.general.profile': 'Profil',
        'settings.general.fullName': 'Nom complet',
        'settings.general.nickname': 'Comment voulez-vous que Forge vous appelle ?',
        'settings.general.job': 'Quel intitulé décrit le mieux votre métier ?',
        'settings.general.instructions': 'Instructions pour Forge',
        'settings.general.instructionsDesc': 'Forge en tiendra compte dans toutes les conversations.',
        'settings.general.instructionsPlaceholder': 'p. ex. rester bref et précis',
        'settings.general.preferences': 'Préférences',
        'settings.general.appearance': 'Apparence',
        'settings.account.title': 'Compte',
        'settings.account.email': 'Email :',
        'settings.account.logout': 'Se déconnecter',
        'settings.privacy.title': 'Confidentialité',
        'settings.privacy.desc': 'Vos données sont stockées localement dans votre navigateur. Nous ne les partageons avec aucun tiers.',
        'settings.language.title': 'Langue',
        'settings.data.title': 'Données',
        'settings.data.desc': 'Supprimez tous vos projets et données enregistrées.',
        'settings.data.clearButton': 'Effacer toutes les données',
        'profile.changePhoto': 'Changer la photo',
        'profile.removePhoto': 'Retirer la photo',
        'profile.photoHint': 'PNG ou JPG, jusqu\'à 5 Mo.',
        'profile.photoError': 'Impossible de charger cette image. Essayez un PNG ou JPG de moins de 5 Mo.'
    },
    pt: {
        'app.title': 'Forge AI',
        'sidebar.newProject': 'Novo projeto',
        'sidebar.projects': 'Projetos',
        'sidebar.empty': 'Você ainda não tem projetos.<br>Crie o primeiro acima.',
        'main.heading': 'Crie o seu próprio prompt!',
        'main.greeting': (name) => `Bem-vindo ao Forge AI, ${name}!`,
        'main.subheading': 'Escreva suas instruções principais para criar seu modelo LLM privado.',
        'main.placeholder': 'Defina regras do sistema, persona, estilo de formatação...',
        'main.placeholderEmpty': 'Escreva algo antes de executar...',
        'main.typewriter': [
            'Crie um sistema de corrida com barra de resistência...',
            'Crie um sistema de minijogos por rodadas...',
            'Projete um sistema de combate com combos...',
            'Gere um sistema de gestão de terrenos para um tycoon...',
            'Escreva um script para um sistema avançado de diálogos...'
        ],
        'toast.success': 'Prompt enviado.',
        'contextMenu.rename': 'Renomear',
        'contextMenu.delete': 'Excluir',
        'confirmModal.deleteTitle': 'Excluir projeto',
        'confirmModal.deleteMessage': (name) => `Tem certeza de que deseja excluir "${name}"? Isso não pode ser desfeito.`,
        'confirmModal.deleteConfirm': 'Excluir',
        'confirmModal.cancel': 'Cancelar',
        'settings.title': 'Configurações',
        'settings.language': 'Idioma',
        'settings.clearData': 'Apagar todos os dados',
        'settings.clearDataDesc': 'Exclui todos os projetos salvos',
        'settings.clearButton': 'Apagar',
        'settings.clearTitle': 'Apagar todos os dados',
        'settings.clearMessage': 'Todos os projetos salvos neste navegador serão excluídos. Isso não pode ser desfeito.',
        'settings.clearConfirm': 'Apagar tudo',
        'login.title': 'Bem-vindo ao Forge AI',
        'login.subtitle': 'Entre para começar a criar seus prompts.',
        'login.namePlaceholder': 'Seu nome',
        'login.emailPlaceholder': 'voce@email.com',
        'login.submit': 'Continuar',
        'login.note': 'Somente demo — nada é enviado, tudo fica no seu dispositivo.',
        'app.footer': 'O Forge AI pode cometer erros. Verifique informações importantes.',
        'profile.settings': 'Configurações',
        'profile.language': 'Idioma',
        'profile.logout': 'Sair',
        'model.selector.effort': 'Esforço',
        'model.selector.thinking': 'Raciocínio',
        'model.selector.thinkingDesc': 'Raciocina antes de responder',
        'model.selector.moreModels': 'Mais modelos',
        'model.selector.back': '← Modelos',
        'settings.search': 'Buscar',
        'settings.configSection': 'Configuração',
        'settings.customizeSection': 'Personalizar',
        'settings.nav.general': 'Geral',
        'settings.nav.account': 'Conta',
        'settings.nav.privacy': 'Privacidade',
        'settings.nav.language': 'Idioma',
        'settings.nav.data': 'Dados',
        'settings.general.profile': 'Perfil',
        'settings.general.fullName': 'Nome completo',
        'settings.general.nickname': 'Como você quer que o Forge te chame?',
        'settings.general.job': 'O que melhor descreve o seu trabalho?',
        'settings.general.instructions': 'Instruções para o Forge',
        'settings.general.instructionsDesc': 'O Forge levará isso em conta em todas as conversas.',
        'settings.general.instructionsPlaceholder': 'ex.: manter as explicações breves e precisas',
        'settings.general.preferences': 'Preferências',
        'settings.general.appearance': 'Aparência',
        'settings.account.title': 'Conta',
        'settings.account.email': 'Email:',
        'settings.account.logout': 'Sair',
        'settings.privacy.title': 'Privacidade',
        'settings.privacy.desc': 'Seus dados são armazenados localmente no seu navegador. Não compartilhamos informações com terceiros.',
        'settings.language.title': 'Idioma',
        'settings.data.title': 'Dados',
        'settings.data.desc': 'Exclua todos os seus projetos e dados salvos.',
        'settings.data.clearButton': 'Apagar todos os dados',
        'profile.changePhoto': 'Alterar foto',
        'profile.removePhoto': 'Remover foto',
        'profile.photoHint': 'PNG ou JPG, até 5MB.',
        'profile.photoError': 'Não foi possível carregar essa imagem. Tente um PNG ou JPG de até 5MB.'
    }
};

// Alias: "Español (España)" usa el mismo diccionario que "Español (Latinoamérica)"
// por ahora (el vocabulario es prácticamente idéntico). Si más adelante quieres
// variantes distintas (vos/tú, vosotros/ustedes, etc.), duplica I18N_DICTIONARY.es
// bajo la clave 'es-es' y ajusta lo que necesites.
I18N_DICTIONARY['es-es'] = I18N_DICTIONARY.es;

// Idiomas que el selector de Configuración muestra pero que TODAVÍA no tienen
// traducción propia (de, hi, id, it, ja, ko). Se dejan como objeto vacío para
// que, si el usuario los selecciona, la app no se rompa: cada texto cae de
// vuelta al inglés gracias al '??' de I18n.t(). Cuando quieras traducirlos de
// verdad, copia el bloque "en: { ... }" completo aquí y traduce cada valor.
['de', 'hi', 'id', 'it', 'ja', 'ko'].forEach(function (lang) {
    if (!I18N_DICTIONARY[lang]) I18N_DICTIONARY[lang] = {};
});

const I18n = {

    current: DEFAULT_LANGUAGE,

    // Loads the saved language (or defaults to English) and applies it to the DOM
    init() {
        const saved = localStorage.getItem(I18N_STORAGE_KEY);
        this.current = saved && I18N_DICTIONARY[saved] ? saved : DEFAULT_LANGUAGE;
        this.apply();
        return this.current;
    },

    // Changes the language, saves it to local storage, and refreshes all visible text
    setLanguage(lang) {
        if (!I18N_DICTIONARY[lang]) return;
        this.current = lang;
        localStorage.setItem(I18N_STORAGE_KEY, lang);
        this.apply();
    },

    // Cycles between available languages (used for the quick toggle in the profile menu)
    cycleLanguage() {
        var next = this.current === 'en' ? 'es' : 'en';
        this.setLanguage(next);
    },

    // Returns the translated text for a given key. If the entry is a function (requires dynamic data), it executes it.
    t(key, ...args) {
        const entry = I18N_DICTIONARY[this.current]?.[key] ?? I18N_DICTIONARY[DEFAULT_LANGUAGE][key];
        return typeof entry === 'function' ? entry(...args) : entry;
    },

    // Traverses the DOM and translates all elements with data-i18n or data-i18n-placeholder attributes
    apply() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.innerHTML = this.t(el.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            if (el.id !== 'prompt-input') {
                el.placeholder = this.t(el.dataset.i18nPlaceholder);
            }
        });
        document.documentElement.lang = this.current;
        // Avisa al resto de la app (typewriter, saludo, etc.) que el idioma cambió,
        // sin que este archivo necesite saber nada de esas otras piezas.
        document.dispatchEvent(new CustomEvent('forge:languagechange', { detail: { lang: this.current } }));
    }
};