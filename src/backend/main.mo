import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";

actor {
  type Inquiry = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let inquiries = Map.empty<Text, Inquiry>();

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
};
