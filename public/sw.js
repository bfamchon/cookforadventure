var CACHE_ASSETS = 'assets-v1';
var assets = [
  '/static/images/home.webp',
  '/static/images/home-tablet.webp',
  '/static/images/nutrition.webp',
  '/static/images/nutrition-tablet.webp',
  '/static/images/about.webp',
  '/static/images/about-tablet.webp',
  '/static/images/adventure-products.webp',
  '/static/images/adventure-products-tablet.webp',
  '/static/images/adventures.webp',
  '/static/images/adventures-tablet.webp',
  '/static/images/cereal-bars.webp',
  '/static/images/cereal-bars-tablet.webp',
  '/static/images/gr30-cover.webp',
  '/static/images/gr30-cover-tablet.webp',
  '/static/images/veloute-patate-douce-pois-chiches.webp',
  '/static/images/veloute-patate-douce-pois-chiches-tablet.webp',
];

self.addEventListener('install', function(event) {
  // Installation du service worker
  event.waitUntil(
    // On utillise le cache des assets
    caches.open(CACHE_ASSETS)
      .then(function(cache) {
        // On pre-cache tous nos assets utiles
        return cache.addAll(assets);
      })
  );
});

self.addEventListener('activate', function(event) {

    // Définition des clés de conteneurs de cache à jour
    var cacheWhitelist = ['assets-cache-v2', 'other-cache-v2'];
  
    event.waitUntil(
      // Récupération de tous les conteneurs 
      // de cache existants sur le périmètre
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            // Si le conteneur de cache ne fait 
            // pas partie de la liste à jour, on le purge
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

  self.addEventListener('fetch', function(event) {
    const requestUrl = new URL(
      event.request.url
    );
  
    if (requestUrl.pathname.startsWith("/static")) {
        // On ouvre le cache des assets
        const promiseResponse = caches.open(CACHE_ASSETS)
          .then(function(cache) {
            // On cherche si la requête existe dans le cache
            return cache.match(event.request)
              .then(function(response) {
                if (response) {
                  // Si la requête existe dans le cache, 
                  // on renvoie la réponse trouvée
                  return response;
                } else {
                  // Sinon on va chercher la ressource sur le serveur
                  return fetch(event.request)
                    .then(function(response) {
                      // Une fois qu'on a reçu la réponse, on met en cache
                      // pour la prochaine fois.
  
                      // On n'oublie pas de cloner la réponse pour pouvoir
                      // la mettre en cache.
  
                      // Une réponse ne peut être lue qu'une seule fois, 
                      // d'où le clone.
                      cache.put(
                        event.request,
                        response.clone()
                      );
  
                      // Et on retourne la réponse
                      return response;
                    });
                }
              });
  
        });
  
        // Une fois que la promesse a fini de s'exécuter, on envoie la réponse
        event.respondWith(promiseResponse);
    }
  });
  