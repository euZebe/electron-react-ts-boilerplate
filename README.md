# electron-react-ts-boilerplate

## What
A starter kit for electron apps using React + Typescript, based on [Electron Forge](https://www.electronforge.io/).

It enables to use:
- React + Typescript for UI part
- Typescript for backend process part
- Jest for unit tests

It includes an example of communication between UI and Main processes (ipcRenderer and ipcMain).

# How to
```
git clone https://github.com/euZebe/electron-react-ts-boilerplate.git your-project-name

cd your-project-name

git remote remove origin
```


----
Many thanks to [@ankitbko](https://twitter.com/ankitbko) for [its article](https://ankitbko.github.io/2019/08/electron-forge-with-react-and-typescript/) about how to initiate an electron project with React and Typescript. 
A few things have been added to suggested steps, as the ability to [import `ipcRenderer` in the UI part](https://disq.us/url?url=https%3A%2F%2Fgithub.com%2Felectron%2Felectron%2Fissues%2F9920%23issuecomment-336757899%3Amgjl-ToU6hiRgqkxBOXpha_qrAw&cuid=4102218). 
