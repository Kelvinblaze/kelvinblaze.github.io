var getUser = prompt("Enter Your Github Username?");

fetch(`https://api.github.com/users/${getUser}`)
  .then(res => res.json())
  .then(data => {
    let profileImg = data.avatar_url;
    let fullname = data.name;
    let githubUserName = data.login;
    let company = data.company;
    let githubUrl = data.html_url;
    let bio = data.bio;
    let publicRepo = data.public_repos;
    let location = data.location;

    // Assigning using the Dom

    document.querySelector("#fullname").innerHTML = fullname;
    document.querySelector("#username").innerHTML = githubUserName;
    document.querySelector("#profileLink").innerHTML = githubUrl;
    document.querySelector("#company").innerHTML = company;
    document.querySelector("#bio").innerHTML = bio;
    document.querySelector("#location").innerHTML = location;
    document.querySelector("#repo").innerHTML = publicRepo;

    var imageWrapper = document.querySelector(".img-wrapper");
    var image = `<img src='${profileImg}' alt='${fullname}' title='${fullname}' />`;
    imageWrapper.innerHTML = image;
  })
  .catch((err) => {
      console.error(err)
  })
