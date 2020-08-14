### rn-swipeable-panel

Line 10 : `let PANEL_HEIGHT = FULL_HEIGHT - 120;`

Line 179 : Add `showsVerticalScrollIndicator={false}`

## TO DO

- [ ] (보류) 어떤 Input이 `required`인지 판단할 방법 생각하기
- [ ] (보류) Input에 `required` 옵션 넣고 빈칸일 경우의 이펙트 설정
- [ ] (보류) Input Title을 선택하면 TextInput에 focus. (웹에서의 `label`느낌으로)
- [x] Input 중에 어떤 걸 필수로 넣어야하는 지 고민할 것
- [x] ToDo Component 디자인 개선
- [x] useInput에서 Number로 처리해야되는건 number로 바꾸는게 편할 듯. TextInput에 value로 들어갈 때만 string으로 바꾸면 될 것 같다? <-> onChangeText로 값을 받아올 때 number로 바꿔야됨
  - [x] softenForm 만들어서 해결.
- [x] createTodoMold를 했을 때 TodoList에 방금 생성한 Todo가 들어가야됨
  - [x] Grid -> Main으로 넘어가도 백엔드 요청을 안하니까, state말고 redux를 사용해도 될 듯?
  - [ ] 아직 시간대별로 정리하는 로직은 못 짬.. 리듀서가 더러워짐
- [x] GridScreen으로 갔을 때 ToDoManager의 text를 바꿔야하는데, props에 접근하면 AppLoading에서 에러가 발생해서 문제;;
- [ ] GridScreen도 개선해야될 듯..
  - [ ] ProgressBar 게이지를 채울 때 loading이 끝나면 채워지도록 할 것
- [ ] Edit 기능 추가할 것
  - [x] Todo를 수정하는 가능 추가
  - [ ] Mold를 수정하는 기능 추가
    - [ ] 어느 날짜부터 적용할 지 선택 가능하도록 할 것
    - [ ] 기존 Mold의 endDate를 선택한 날짜로, isValid를 false로 바꾸고, 선택한 날짜 이후 날짜로 생성되었던 Todo들은 전부 삭제
    - [ ] 새로운 Mold를 만드는 resolver + Hook을 이용하면 해결 가능.
- [x] Remove 기능 추가할 것
  - [x] Todo를 삭제하는 기능 추가
  - [ ] Mold를 삭제하는 기능 추가
    - [ ] CASCADING DELETE만 해결하면 금방 해결될 문제... TypeORM으로 바꿔야하나 고민중;
- [ ] Todo Toggle 버튼 개선할 것
  - [ ] 백엔드에 toggle된 정보를 보낼 때 발생하는 딜레이 동안은 toggle 버튼을 disabled하면 되지 않을까?
  - [ ] 아니면 toggle 버튼이 눌린 후 일정시간 동안 toggle 버튼이 눌리지 않으면 백엔드에 요청을?
- [ ] Todo를 생성할 때, 일수로 설정가능하도록 할 것. 예를 들어 100일동안 진행하겠다 등..
- [x] StatusBarStyle과 Detail은 굳이 리덕스를 사용하지 않아도 되지않을까?
- [ ] MoldScreen 수정 페이지를 어떻게 해결할 지 고민 중...
  - [ ] Todo Screen과 동일하게?

- [ ] Panel 자체에 버그가 상당함. react-native-modalize 적용을 고민해볼 것. 혹은 PanResponder를 개선할 방법을 찾아볼 것
  - [x] 일정 HEIGHT 이상으로 스크롤 했을 때, Component가 분리되는 현상 해결할 것

## MEMO

- Required

  - `startDate`
  - `title`

- OPTIONAL
  - `amount` = 0
  - `unit` = '개', if `amount` = 0, null
  - `startTime` = -1 or '99:99'
  - `endTime` = -1 or '99:99'
  - `endDate` = `startDate`
  - `weekDifference` = 0
  - `dateDifference` = 0
  - `amountChangeInterval` = 0
  - `amountDifference` = 0
