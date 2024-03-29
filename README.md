### rn-swipeable-panel

Line 10 : `let PANEL_HEIGHT = FULL_HEIGHT - 120;`

Line 179 : Add `showsVerticalScrollIndicator={false}`

## TO DO

- [x] Input 중에 어떤 걸 필수로 넣어야하는 지 고민할 것
- [x] ToDo Component 디자인 개선
- [x] useInput에서 Number로 처리해야되는건 number로 바꾸는게 편할 듯. TextInput에 value로 들어갈 때만 string으로 바꾸면 될 것 같다? <-> onChangeText로 값을 받아올 때 number로 바꿔야됨
  - [x] softenForm 만들어서 해결.
- [x] createTodoMold를 했을 때 TodoList에 방금 생성한 Todo가 들어가야됨
  - [x] Grid -> Main으로 넘어가도 백엔드 요청을 안하니까, state말고 redux를 사용해도 될 듯?
- [x] GridScreen으로 갔을 때 ToDoManager의 text를 바꿔야하는데, props에 접근하면 AppLoading에서 에러가 발생해서 문제;;
- [x] Edit 기능 추가할 것
  - [x] Todo를 수정하는 가능 추가
  - [x] Mold를 수정하는 기능 추가
    - [x] 어느 날짜부터 적용할 지 선택 가능하도록 할 것
    - [x] ~~기존 Mold의 endDate를 선택한 날짜로, isValid를 false로 바꾸고~~, 선택한 날짜 이후 날짜로 생성되었던 Todo들은 전부 삭제
    - [x] 새로운 Mold를 만드는 resolver + Hook을 이용하면 해결 가능.
- [x] Remove 기능 추가할 것
  - [x] Todo를 삭제하는 기능 추가
  - [x] Mold를 삭제하는 기능 추가
    - [x] CASCADING DELETE만 해결하면 금방 해결될 문제... TypeORM으로 바꿔야하나 고민중; -> Raw Query를 이용해서 해결
    - [x] 임시로 생성된 Mold는 어떻게 삭제? -> Redux에 존재하는 가짜 Mold..
- [x] Todo Toggle 버튼 개선할 것
  - [x] 백엔드에 toggle된 정보를 보낼 때 발생하는 딜레이 동안은 toggle 버튼을 disabled하면 되지 않을까?
  - [x] 아니면 toggle 버튼이 눌린 후 일정시간 동안 toggle 버튼이 눌리지 않으면 백엔드에 요청을?
- [x] StatusBarStyle과 Detail은 굳이 리덕스를 사용하지 않아도 되지않을까?
- [x] EditScreen에 수정완료 버튼 추가할 것
- [x] EditScreen / TodoPanelContent에 삭제 버튼 추가할 것
- [x] MoldScreen에서 연속 달성 숫자를 프론트에서 조절할 수 있도록 바꿀 것
- [x] Mold를 수정했을 때, 현재 진행률 및 달성률이 0%임. 그리고 이 퍼센트 계산 방법을 어떻게 할 지 고민 해 볼 것
- [x] Logout 기능 추가할 것
- [x] Input Title을 선택하면 TextInput에 focus. (웹에서의 `label`느낌으로)
- [x] 어떤 Input이 `required`인지 판단할 방법 생각하기
- [x] Input에 `required` 옵션 넣고 빈칸일 경우의 이펙트 설정
  - [x] required input을 안 채우면, Submit 버튼을 비활성화시키는 게 나을 듯.
- [x] CreateTodoMold / EditTodoMold 직후 생성된 Todo들은 Toggle할 때 에러 발생
  - [x] Mutation의 리턴값으로 아이디들의 배열을 가져와야할 듯
- [x] CreateTodoMold에서 반복하지 않는 Todo를 생성할 때, redux에 아이템이 등록 안됨.
- [x] 반복하지 않는 Todo는 Mold를 생성하지 않도록 할 것
- [x] Todo를 지울 때 원인을 알 수 없는 400 Error가 발생함. (deleteTodo 이름 겹쳐서 발생한 에러였음)
- [x] EditTodoMold로 수정해도 startDate는 고정시킬 방법이 있을까?
  - [x] 처음 startDate로 고정하게 만듦
  - [x] 다만, 수정하고 나서 리덕스에 적용된건 수정적용날짜임
- [x] Dark mode 구현 할 것
  - [x] Calendar에는 바로바로 적용 안됨.. 최적화 때문에 그런듯?
  - [x] Dark Mode 적용해야하는 곳
    - [x] InputLayout Title
    - [x] TodoScreen
    - [x] RadioButton
    - [x] ListOfWeekDays
    - [x] Panel Close Button
    - [x] Panel Bar
    - [x] Panel Right Button
    - [x] DeleteButton-screen
    - [x] MoldScreen
      - [x] ProgressBar
    - [ ] Sign In / Sign Up / 수정 / 생성 버튼 컬러 바꿀 것
- [ ] (보류) Calendar Header의 텍스트에 fadeOut, fadeIn animation을 적용하면 좋을듯?
- [ ] (보류) Login을 없애는 게 좋을까?
  - [ ] 정보 입력 -> 백엔드에서 데이터 생성과 동시에 토큰 발급 -> 어차피 요청은 토큰으로 할 것 -> 토큰의 소스는 데이터의 cuid값 -> backup용 아이디 및 패스워드를 발급 가능
- [ ] Skeleton UI가 필요한 곳에 loading 값 얻어오기
  - [x] (Skeleton UI X) SignUpScreen
  - [x] (Skeleton UI X) SignInScreen
    - [ ] Loading할 때 input도 disabled해야할 듯
  - [x] (Skeleton UI X) TodoScreen - Delete
  - [x] (Skeleton UI X) TodoFormScreen - Delete
  - [x] (Skeleton UI X) TodoFormScreen - Create / Edit
  - [x] (Skeleton UI X) TodoScreen - Edit
  - [x] GridScreen
  - [x] MoldScreen
  - [x] TodoScreen
  - [ ] MainScreen
- [ ] Todo를 아직 시간대별로 정리하는 로직은 못 짬.. 리듀서가 더러워짐
- [ ] iPhone 11 Pro Max 외 기기에서 테스트 해볼 것
  - [ ] iOS
    - [ ] iPhone 8 / iPhone 8 Plus
      - [x] DeleteButton-screen이 잘림.
      - [x] Panel Height가 좀 부족한 느낌이 듦. (좀 더 올라왔으면 함)
      - [ ] SignInScreen에서 Keyboard 때문에 SIGN UP 버튼이 일부 가려져서 답답한 느낌이 듦.
  - [ ] Android
    - [ ] Pixel 2
      - [ ] Sign Up, Sign In Screen에서 키보드를 피해 화면이 올라가나, 잘림.
- [ ] Error 처리를 해야됨
  - [ ] SignUpScreen에서 username이 이미 존재하는 경우
  - [ ] SignInScreen에서 username이 존재하지 않거나, password가 틀린 경우
- [ ] StartDate가 EndDate보다 after인 경우 toast message 표시할 것 (`react-native-simple-toast`)
- [ ] `react-native-skeleton-content` 적용할 것
- [ ] `react-native-date-picker` 적용할 것
- [ ] `react-native-iap` or `react-native-payment` 적용할 것
- [ ] `react-native-admob` 적용할 것
- [ ] 위젯 기능 추가할 것
- [ ] DrawerContent 상단에 로고 및 앱 버전 넣을 것

### 다음 버전에 적용할 것

- [ ] GridScreen도 개선해야될 듯..
  - [ ] ProgressBar 게이지를 채울 때 loading이 끝나면 채워지도록 할 것
- [ ] Todo를 생성할 때, 일수로 설정가능하도록 할 것. 예를 들어 100일동안 진행하겠다 등..
- [ ] Form에서 done,next 등을 누르면 다음 TextInput으로 넘어가게 할 것
- [ ] Panel 자체에 버그가 상당함. react-native-modalize 적용을 고민해볼 것. 혹은 PanResponder를 개선할 방법을 찾아볼 것
  - [x] 일정 HEIGHT 이상으로 스크롤 했을 때, Component가 분리되는 현상 해결할 것
  - [ ] 처음 오픈됐을 때, Input에 한 글자를 타이핑하면 포커스가 사라지고, 버튼은 처음 누른 건 씹힘
- [ ] (보류) EditTodoMold 이 후, 첫 GridScreen에서 퍼센트가 전부 0으로 초기화 되어버림.

기능 테스트

- [x] Login / Sign Up
- [x] Logout
- [x] GET Data (Todo, TodoMold)
- [x] Edit Todo
  - [x] Front
  - [x] Back
- [x] Delete Todo (Back, Front)
- [x] Create TodoMold (Back, Front)
- [x] Delete TodoMold (Back, Front)
- [x] Edit TodoMold (Back, Front)
  - [x] 일단, 기존 TodoMold와 관련된 Todo가 삭제되는 것 까지는 정상 작동, TodoMold는 수정 안됨 (Back, Front)

## MEMO

- Required

  - `startDate`
  - `title`

- OPTIONAL
  - `amount` = 0
  - `unit` = '개', if `amount` = 0, empty string
  - `startTime` = -1 or '99:99'
  - `endTime` = -1 or '99:99'
  - `isRepeat` = false
  - `method` = 'weekdays'
  - `endDate`
  - `weekDifference` = 0
  - `dateDifference` = 0
  - `amountChangeInterval` = 0
  - `amountDifference` = 0

## react-native-calendars

혹시몰라서 메모해둠

calendar/header/index.js의 101번째 줄의 renderWeekDays 함수에

```
if(idx === 0) dayStyle.push(this.style.sundayHeader);

if(idx === 6) dayStyle.push(this.style.saturdayHeader);
```

추가해야 dayNames가 꾸며짐
