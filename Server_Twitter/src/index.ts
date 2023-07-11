type Handle = () => Promise<string>
const fullname = 'Uyen Nguyen'

const handle: Handle = () => Promise.resolve(fullname)
// console.log(fullname)
// handle().then(console.log)

handle().then((res) => {
  console.log(res)
})
