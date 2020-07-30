### rn-swipeable-panel

Line 10 : `let PANEL_HEIGHT = FULL_HEIGHT - 120;`

Line 179 : Add `showsVerticalScrollIndicator={false}`

## TO DO

- [x] Input 중에 어떤 걸 필수로 넣어야하는 지 고민할 것
- [ ] (보류) 어떤 Input이 `required`인지 판단할 방법 생각하기
- [ ] (보류) Input에 `required` 옵션 넣고 빈칸일 경우의 이펙트 설정
- [ ] (보류) Input Title을 선택하면 TextInput에 focus. (웹에서의 `label`느낌으로)
- [ ] GridScreen으로 갔을 때 ToDoManager의 text를 바꿔야하는데, props에 접근하면 AppLoading에서 에러가 발생해서 문제;;
- [x] ToDo Component 디자인 개선
- [ ] GridScreen도 개선해야될 듯..
  - [ ] ProgressBar 게이지를 채울 때 loading이 끝나면 채워지도록 할 것
- [x] useInput에서 Number로 처리해야되는건 number로 바꾸는게 편할 듯. TextInput에 value로 들어갈 때만 string으로 바꾸면 될 것 같다? <-> onChangeText로 값을 받아올 때 number로 바꿔야됨
  - [x] softenForm 만들어서 해결.
- [x] createTodoMold를 했을 때 TodoList에 방금 생성한 Todo가 들어가야됨
  - [x] Grid -> Main으로 넘어가도 백엔드 요청을 안하니까, state말고 redux를 사용해도 될 듯?
  - [ ] 아직 시간대별로 정리하는 로직은 못 짬.. 리듀서가 더러워짐
- [ ] Edit 기능 추가할 것
  - [ ] 앞으로의 모든 Todo를 수정하는 경우, Mold를 새로 만드는 것도 나쁘지 않을듯?

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
