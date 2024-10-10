import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Course {
  'id' : CourseId,
  'title' : string,
  'description' : string,
  'tokenReward' : bigint,
}
export type CourseId = bigint;
export interface NFT { 'id' : NFTId, 'name' : string, 'courseId' : CourseId }
export type NFTId = bigint;
export type Result = { 'ok' : Array<NFT> } |
  { 'err' : string };
export type Result_1 = { 'ok' : User } |
  { 'err' : string };
export type Result_2 = { 'ok' : bigint } |
  { 'err' : string };
export type Result_3 = { 'ok' : Course } |
  { 'err' : string };
export type Result_4 = { 'ok' : null } |
  { 'err' : string };
export type Result_5 = { 'ok' : CourseId } |
  { 'err' : string };
export interface User {
  'id' : UserId,
  'username' : string,
  'completedCourses' : Array<CourseId>,
  'nfts' : Array<NFTId>,
  'tokens' : bigint,
  'skills' : Array<string>,
}
export type UserId = Principal;
export interface _SERVICE {
  'completeCourse' : ActorMethod<[CourseId], Result_4>,
  'createCourse' : ActorMethod<[string, string, bigint], Result_5>,
  'createUser' : ActorMethod<[string], Result_4>,
  'getCourse' : ActorMethod<[CourseId], Result_3>,
  'getTokenBalance' : ActorMethod<[UserId], Result_2>,
  'getUser' : ActorMethod<[UserId], Result_1>,
  'getUserNFTs' : ActorMethod<[UserId], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
