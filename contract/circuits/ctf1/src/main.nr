
fn main(message : pub str<24>) {
    let expected_message = "hello_world_ctf_password";
    assert(message == expected_message);
}

#[test]
fn test_main() {
    main("hello_world_ctf_password");

    // Uncomment to make test fail
    // main(1, 1);
}
