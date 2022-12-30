window.BENCHMARK_DATA = {
  "lastUpdate": 1672411318698,
  "repoUrl": "https://github.com/karol-janik/boa",
  "entries": {
    "Boa Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "sveera.2001@gmail.com",
            "name": "Veera",
            "username": "veera-sivarajan"
          },
          "committer": {
            "email": "sveera.2001@gmail.com",
            "name": "Veera",
            "username": "veera-sivarajan"
          },
          "distinct": true,
          "id": "f216a6dda9076185a6f9247b015d3649497b96c7",
          "message": "Fix unary operations on `this` (#2507)\n\n<!---\r\nThank you for contributing to Boa! Please fill out the template below, and remove or add any\r\ninformation as you feel necessary.\r\n--->\r\n\r\nThis Pull Request fixes/closes #2416.\r\n\r\nPreviously, prefix increment and decrement operations on `this` caused a panic. This PR makes the parser issue a syntax error when the operand UnaryExpression is not simple (as mentioned in https://tc39.es/ecma262/#sec-update-expressions-static-semantics-early-errors).",
          "timestamp": "2022-12-30T07:08:15Z",
          "tree_id": "97e0204c1a1d62fa40ad96b353480ad963ed31b6",
          "url": "https://github.com/karol-janik/boa/commit/f216a6dda9076185a6f9247b015d3649497b96c7"
        },
        "date": 1672411315016,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 298,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 6554,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 19553,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 22927,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 12959,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 13973,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 14810,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 9024,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 11884,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 11301,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 14025,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 16468,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 19497,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 173994,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 10945,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 15909,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 8273,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 15685,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 20518,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 19778,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 7872,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 40671,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 35290,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Compiler)",
            "value": 1108,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Compiler)",
            "value": 2720,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Compiler)",
            "value": 2750,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Compiler)",
            "value": 1497,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Compiler)",
            "value": 1554,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Compiler)",
            "value": 1791,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Compiler)",
            "value": 1571,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Compiler)",
            "value": 1586,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Compiler)",
            "value": 1774,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Compiler)",
            "value": 1769,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Compiler)",
            "value": 1507,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Compiler)",
            "value": 2359,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Compiler)",
            "value": 4085,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Compiler)",
            "value": 1804,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Compiler)",
            "value": 2411,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Compiler)",
            "value": 1441,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Compiler)",
            "value": 1104,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Compiler)",
            "value": 1240,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Compiler)",
            "value": 1508,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Compiler)",
            "value": 525,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Compiler)",
            "value": 5117,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Compiler)",
            "value": 4479,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 4188,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 16350,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 1221129,
            "range": "± 5511",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 5034,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 5272,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 5383,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 9750,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 9676,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 14184,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 14177,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 9837,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 1436343,
            "range": "± 8466",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 831565,
            "range": "± 2017",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 4325,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 4693,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 4164,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 4151,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 5599,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 7794,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 422,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 780928,
            "range": "± 4034",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 732220,
            "range": "± 4321",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}