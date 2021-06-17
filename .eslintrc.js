module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error', // warn으로 하면 warning만 뜸
      {
        singleQuote: true, // 작은 따옴표
        semi: true, // 세미콜론
        useTabs: false, // 탭사용
        tabWidth: 2, // 탭간격
        printWidth: 80, // 한줄 80자까지
        bracketSpacing: true, // { foo: bar } 오브젝트 리터럴 내 간격
        arrowParens: 'avoid', // 화살표함수 관련 avoid는 x => x, always는 (x) => x
        endOfLine: 'auto', // Delete `␍` eslint (prettier/prettier) 오류해결
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
