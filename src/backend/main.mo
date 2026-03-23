import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

import Int "mo:core/Int";


actor {
  type Inquiry = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type BlogPost = {
    id : Nat;
    title : Text;
    category : Text;
    excerpt : Text;
    publishedAt : Time.Time;
    author : Text;
  };

  let inquiries = Map.empty<Text, Inquiry>();
  let posts = Map.empty<Nat, BlogPost>();
  var currentPostId = 0;

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text) : async () {
    let timestamp = Time.now();
    let inquiry : Inquiry = {
      name;
      email;
      message;
      timestamp;
    };
    if (inquiries.containsKey(email)) {
      Runtime.trap("Inquiry already submitted with this email");
    };
    inquiries.add(email, inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray();
  };

  public shared ({ caller }) func addBlogPost(title : Text, category : Text, excerpt : Text, author : Text) : async Nat {
    let id = currentPostId;
    let post : BlogPost = {
      id;
      title;
      category;
      excerpt;
      publishedAt = Time.now();
      author;
    };
    posts.add(id, post);
    currentPostId += 1;
    id;
  };

  func compareByPublishedAt(a : BlogPost, b : BlogPost) : Order.Order {
    Int.compare(b.publishedAt, a.publishedAt);
  };

  public query ({ caller }) func getLatestBlogPosts(limit : Nat) : async [BlogPost] {
    let allPosts = posts.values().toArray();
    let sortedPosts = allPosts.sort(compareByPublishedAt);

    if (limit >= sortedPosts.size()) {
      sortedPosts;
    } else {
      Array.tabulate<BlogPost>(limit, func(i) { sortedPosts[i] });
    };
  };

  public query ({ caller }) func getBlogPostCount() : async Nat {
    posts.size();
  };

  public shared ({ caller }) func deleteBlogPost(id : Nat) : async () {
    if (not posts.containsKey(id)) {
      Runtime.trap("Blog post with id " # id.toText() # " not found");
    };
    posts.remove(id);
  };
};

