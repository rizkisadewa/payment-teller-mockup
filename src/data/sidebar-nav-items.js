export default function() {
  return [
    {
      title: "Blog Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">dashboard</i>',
      htmlAfter: ""
    },
    {
      title: "Payment Umroh",
      htmlBefore: '<i class="material-icons">money</i>',
      to: "/blog-posts",
    },
    {
      title: "Payment Haji",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "Pajak",
      htmlBefore: '<i class="material-icons">notes</i>',
      to: "/components-overview",
    },
    {
      title: "Payment UIN",
      htmlBefore: '<i class="material-icons">school</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
