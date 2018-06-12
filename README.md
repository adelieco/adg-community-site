# ADG COMMUNITY SITE

## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

To run the site,
```sh
cd adg-community-site
gatsby develop
# visit localhost:8080
```

## Adding a new member

1. In the `members/` directory, add a new folder with the member's name. 
2. Copy the `members/member-info-template.md` file into the new folder you just made.
3. Enter the values for the new member at the top, which uses the YAML format. The bio itself should replace the Lorem Ipsum text in the template. Note the format of the `socials` YAML key is a bit weird, it is not one hyphen per social, it is one hyphen to reference all of them:
```yaml
socials: 
- twitter: "johndoe"
  linkedin: "johnnydoe"
```
4. Add an image of the new member, in JPG format. Preferably less than 300px x 300px, and optimized using image optimization sites like TinyPNG or ImageOptim.
5. The name of the image file needs to EXACTLY match the `name` value used in `member-info.md`, except lowercase, and with hyphens replacing spaces. 
    - For example, if the name of the member is `Billy Joel`, the image name must be `billy-joel.jpg`. 
6. Visit the `/members` page and they should now be there. 

