# geonwoo map : 타겟 회사 정보를 담은 웹지도 제작 프로젝트 
![image](https://github.com/user-attachments/assets/2e571ed9-2738-4625-8755-81c3217db673)


## 소개

이 프로젝트는 Geonwoo Sales Target Companies Map으로 현재 재직 중인 회사의 영업팀에서 **타 전장 업체들의 정보를 시각화한 지도**를 이용해 영업 전략을 수립하기 위해 만들어졌습니다.  
구글 GCP를 통해 배포한 웹페이지의 주소는 http://35.216.40.231/ 입니다.

## 기능

### **검색 기능**: 검색이 가능하도록 하여 관심 업체를 검색해 지도에서 선택할 수 있도록 구현하였습니다.
![image](https://github.com/user-attachments/assets/f6304bf7-4fb3-41a5-be74-99625f0a7ae6)
![image](https://github.com/user-attachments/assets/4b0b6e8c-9f41-42d8-a1ce-b44bd3733e8e)
### **인터랙티브 맵**: Leaflet을 사용하여 인터랙티브 맵으로 구현하였습니다.
### **툴팁의 회사 이름에 하이퍼링크 처리하여 노션 DB와 연동**: 마커의 툴팁에 회사 이름을 노션의 회사 정보와 하이퍼링크로 연결하여 마커의 회사 이름 클릭 시 노션에 기록된 정보를 바로 열람 가능하도록 구현하였습니다.
![image](https://github.com/user-attachments/assets/8520a1d4-6020-4fb4-802b-3d00e9a45418)
### **중요도에 따른 마커 색상 변화 및 범례 표시 기능** : 중요도가 높을 수록 짙은 색 마커 색상을 사용하였으며, 중요도 5 미만 시 회색으로 일괄 처리하여 시각화하였습니다.
중요도는 자체 기준에 따라 점수를 매겨 파이썬으로 계산하여 0점에서 10점까지 부여했습니다.
## 기술 스택

- **언어**: JavaScript, HTML, CSS, Python
- **프레임워크**: Leaflet.js
- **서버**: Flask, GCP
- **데이터베이스**: Notion에 파이썬 데이터프레임 형태로 저장된 회사 정보
![image](https://github.com/user-attachments/assets/8472f95e-38c0-45d6-9d10-12a5f5db91bc)

