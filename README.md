### rn-swipeable-panel

Line 10 : `let PANEL_HEIGHT = FULL_HEIGHT - 120;`

Line 179 : Add `showsVerticalScrollIndicator={false}`

## TO DO

- [x] Input 중에 어떤 걸 필수로 넣어야하는 지 고민할 것
- [ ] (보류) 어떤 Input이 `required`인지 판단할 방법 생각하기
- [ ] (보류) Input에 `required` 옵션 넣고 빈칸일 경우의 이펙트 설정
- [ ] (보류) Input Title을 선택하면 TextInput에 focus. (웹에서의 `label`느낌으로)
- [ ] ToDo Component 디자인 개선
- [ ] GridScreen도 개선해야될 듯..
- [ ] ProgressBar 게이지를 채울 때 loading이 끝나면 채워지도록 할 것
- [ ] createTodoMold를 했을 때 TodoList에 방금 생성한 Todo가 들어가야됨. (Backend에서 사용하는 로직 그대로 가져올것 todo생성하는 로직 및 정렬하는 로직)
  - [ ] Grid -> Main으로 넘어가도 백엔드 요청을 안하니까, state말고 redux를 사용해도 될 듯?

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
