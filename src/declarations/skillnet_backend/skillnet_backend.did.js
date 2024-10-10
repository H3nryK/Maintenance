export const idlFactory = ({ IDL }) => {
  const CourseId = IDL.Nat;
  const Result_4 = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const Result_5 = IDL.Variant({ 'ok' : CourseId, 'err' : IDL.Text });
  const Course = IDL.Record({
    'id' : CourseId,
    'title' : IDL.Text,
    'description' : IDL.Text,
    'tokenReward' : IDL.Nat,
  });
  const Result_3 = IDL.Variant({ 'ok' : Course, 'err' : IDL.Text });
  const UserId = IDL.Principal;
  const Result_2 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const NFTId = IDL.Nat;
  const User = IDL.Record({
    'id' : UserId,
    'username' : IDL.Text,
    'completedCourses' : IDL.Vec(CourseId),
    'nfts' : IDL.Vec(NFTId),
    'tokens' : IDL.Nat,
    'skills' : IDL.Vec(IDL.Text),
  });
  const Result_1 = IDL.Variant({ 'ok' : User, 'err' : IDL.Text });
  const NFT = IDL.Record({
    'id' : NFTId,
    'name' : IDL.Text,
    'courseId' : CourseId,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Vec(NFT), 'err' : IDL.Text });
  return IDL.Service({
    'completeCourse' : IDL.Func([CourseId], [Result_4], []),
    'createCourse' : IDL.Func([IDL.Text, IDL.Text, IDL.Nat], [Result_5], []),
    'createUser' : IDL.Func([IDL.Text], [Result_4], []),
    'getCourse' : IDL.Func([CourseId], [Result_3], ['query']),
    'getTokenBalance' : IDL.Func([UserId], [Result_2], ['query']),
    'getUser' : IDL.Func([UserId], [Result_1], ['query']),
    'getUserNFTs' : IDL.Func([UserId], [Result], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
