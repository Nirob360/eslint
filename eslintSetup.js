export const Eslint = [
    scripts: {
        "lint": "npm i -D prettier && npx install-peerdeps --dev eslint-config-airbnb && npm i -D eslint-config-prettier eslint-plugin-prettier"
    },

    .eslintrc.json {
        "extends": [
          "airbnb",
          "airbnb/hooks",
          "eslint:recommended",
          "prettier",
          "plugin:jsx-a11y/recommended"
        ],
      
        "parserOptions": {
          "ecmaVersion": 13
        },
        "env": {
          "browser": true,
          "node": true,
          "es2021": true,
          "jest": true
        },
        "rules": {
          "react/jsx-filename-extension": [
            1,
            {
              "extensions": [".js", ".jsx"]
            }
          ],
          "prettier/prettier": [
            "error",
            {
              "trailingComma": "es5",
              "singleQuote": true,
              "printWidth": 100,
              "tabWidth": 2,
              "semi": true,
              "endOfLine": "auto"
            }
          ]
        },
        "plugins": ["prettier", "react", "react-hooks"]
      },
      vscodesetting {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true,
        "[javascript]": {
            "editor.formatOnSave": false,
            "editor.defaultFormatter": null
          },
          "[javascriptreact]": {
            "editor.formatOnSave": false,
            "editor.defaultFormatter": null
          },
          "javascript.validate.enable": false,
          "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
            "source.fixAll.tslint": true,
            "source.organizeImports": true
          },
          "eslint.alwaysShowStatus": true,
          "emmet.triggerExpansionOnTab": true,
          "emmet.includeLanguages": {
            "javascript": "javascriptreact"
          }

      },
      env = {
        SKIP_PREFLIGHT_CHECK=true
    }
      

]