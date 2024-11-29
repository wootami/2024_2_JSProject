document.addEventListener('DOMContentLoaded', () => {
    let map;
    let markers = [];

    // Google Maps 초기화
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 37.5665, lng: 126.9780 }, // 서울 중심 좌표
            zoom: 8
        });
    }

    // 장소 추가
    const addPlaceButton = document.getElementById('addPlace');
    const placeList = document.getElementById('placeList');
    const searchPlaceInput = document.getElementById('searchPlace');

    addPlaceButton.addEventListener('click', () => {
        const place = searchPlaceInput.value.trim();
        if (!place) return alert('장소 이름을 입력하세요.');

        const li = document.createElement('li');
        li.textContent = place;
        placeList.appendChild(li);

        // Google Maps Geocoding API로 주소 검색
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: place }, (results, status) => {
            if (status === "OK") {
                const location = results[0].geometry.location;
                const marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    title: place
                });
                markers.push(marker);
                map.setCenter(location);
            } else {
                alert('장소를 찾을 수 없습니다: ' + status);
            }
        });

        searchPlaceInput.value = ""; // 입력 필드 초기화
    });

    initMap();
});
