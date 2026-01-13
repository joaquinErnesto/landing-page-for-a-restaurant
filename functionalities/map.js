// Inicializar el mapa

const map = L.map('restaurant-map').setView([40.7128, -74.0060], 15); // Coordenadas ejemplo


// Añadir capa de tiles de OpenStreetMap

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© OpenStreetMap contributors'
}).addTo(map);


// Añadir marcador en la ubicación del restaurante

const restaurantMarker = L.marker([40.7128, -74.0060]).addTo(map);

restaurantMarker.bindPopup("<b>Ancestral Flavors</b><br>Nuestro restaurante").openPopup();

// Crear un icono personalizado

const customIcon = L.icon({
    iconUrl: 'ruta/a/tu/icono.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
});

// Usar el icono personalizado

restaurantMarker = L.marker([40.7128, -74.0060], {icon: customIcon}).addTo(map);

// Añadir control de escala

L.control.scale().addTo(map);

// Añadir control de capas (opcional)
L.control.layers({
    "Mapa Standard": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
    "Satélite": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')
}).addTo(map);