# geonwoo map : 타겟 회사 정보를 담은 웹지도 제작 프로젝트 
![image](https://github.com/user-attachments/assets/9a365105-22ed-47d3-a03c-89fd745ae843)

## 소개

이 프로젝트는 Geonwoo Sales Target Companies Map으로 현재 재직 중인 회사의 영업팀에서 **타 전장 업체들의 정보를 시각화한 지도**를 이용해 영업 전략을 수립하기 위해 만들어졌습니다. 

## 기능

- **검색 기능**: 검색이 가능하도록 하여 관심 업체를 검색해 지도에서 선택할 수 있도록 구현하였습니다.
 ![image alt="대체 텍스트" width="500" height="300"](https://github.com/user-attachments/assets/33868d9d-c81f-41b1-865a-f227968c94b4)
 ![image alt="대체 텍스트" width="500" height="300"](https://github.com/user-attachments/assets/93db8983-62d6-4358-b0be-3f9c8ddebebd)
- **인터랙티브 맵**: Leaflet을 사용하여 인터랙티브 맵으로 구현하였습니다.
- **툴팁의 회사 이름에 하이퍼링크 처리하여 노션 DB와 연동**: 마커의 툴팁에 회사 이름을 노션의 회사 정보와 하이퍼링크로 연결하여 마커의 회사 이름 클릭 시 노션에 기록된 정보를 바로 열람 가능하도록 구현하였습니다.
 ![image alt="대체 텍스트" width="500" height="300"](https://github.com/user-attachments/assets/c24ce3bf-ab53-43b6-b41e-15dcef6a76cc)

- **중요도에 따른 마커 색상 변화 및 범례 표시 기능** : 중요도가 높을 수록 짙은 색 마커 색상을 사용하였으며, 중요도 5 미만 시 회색으로 일괄 처리하여 시각화하였습니다.

## 기술 스택

- **언어**: JavaScript, HTML, CSS, Python
- **프레임워크**: Leaflet.js
- **서버**: Flask, GCP
- **데이터베이스**: Notion에 파이썬 데이터프레임 형태로 저장된 회사 정보
