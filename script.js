document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map', {
        zoomControl: false // 기본 zoomControl을 비활성화
    }).setView([36.5, 127.8], 8);

    L.control.zoom({
        position: 'topright' // zoomControl 위치를 오른쪽 상단으로 설정
    }).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var markers = [];

    function getIconUrl(color) {
        switch(color) {
            case 'red':
                return 'css/red_marker.png'; // 업로드된 아이콘 경로로 변경
            case 'lightred':
                return 'css/light_red_marker.png'; // 업로드된 아이콘 경로로 변경
            case 'yellow':
                return 'css/yellow_marker.png'; // 업로드된 아이콘 경로로 변경
            case 'lemon':
                return 'css/lemon_marker.png'; // 업로드된 아이콘 경로로 변경
            case 'gray':
                return 'css/gray_marker.png'; // 업로드된 아이콘 경로로 변경
            default:
                return 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png'; // 기본 아이콘
        }
    }

    // JSON 파일 불러오기
    fetch('marker_data.json')
        .then(response => response.json())
        .then(markerData => {
            console.log("Marker data loaded:", markerData); // 데이터가 로드되었는지 확인
            markerData.forEach(function(data) {
                var marker = L.marker([data.lat, data.lon], {
                    icon: L.icon({
                        iconUrl: getIconUrl(data.color),
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                        shadowSize: [41, 41]
                    })
                }).bindPopup(data.popup).addTo(map);
                markers.push({
                    marker: marker,
                    name: data.name.toLowerCase()
                });
            });
        })
        .catch(error => console.error("Error loading marker data:", error)); // 오류가 있는 경우 출력

    document.getElementById('searchInput').addEventListener('input', function () {
        var input = document.getElementById('searchInput').value.toLowerCase();
        markers.forEach(function(item) {
            if (item.name.includes(input)) {
                map.addLayer(item.marker);
            } else {
                map.removeLayer(item.marker);
            }
        });
    });
});
