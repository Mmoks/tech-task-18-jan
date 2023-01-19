import { gql } from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. BigInt can represent values between -(2^53) + 1 and 2^53 - 1. */
  BigInt: any;
  /** Decimal value with a maximum of 2 decimal digits. */
  Decimal: any;
  /** ISO 8601 Durations define the amount of intervening time in a time interval and are represented by the format P[n]Y[n]M[n]DT[n]H[n]M[n]S or P[n]W */
  Duration: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** An integer between 1 and 250 */
  PaginationAmount: any;
  /** An integer between 1 and 800 */
  PaginationAmountLarge: any;
  /** A special custom Scalar type for Dates that converts to a ISO formatted string */
  SequelizeDate: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  Url: any;
};

export type AbortZincOrderInput = {
  zincOrderId: Scalars['ID'];
};

export type AbortZincOrderPayload = {
  __typename?: 'AbortZincOrderPayload';
  zincOrder?: Maybe<ZincOrder>;
};

export type AcceptTosInput = {
  acceptTos?: InputMaybe<Scalars['Boolean']>;
  version?: InputMaybe<Scalars['Int']>;
};

export type AcceptTosPayload = {
  __typename?: 'AcceptTosPayload';
  acceptTos: Scalars['Boolean'];
  acceptedTosVersion: Scalars['Int'];
};

export type Achievement = Node & {
  __typename?: 'Achievement';
  autoClaim: Scalars['Boolean'];
  /** @deprecated Use rewards instead */
  bonusAmounts?: Maybe<Array<BonusAmount>>;
  /** @deprecated Use rewardsExpireAfterSeconds instead */
  bonusExpirySeconds?: Maybe<Scalars['Int']>;
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  description: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  limitPerUser?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  rewards: Array<AchievementReward>;
  rewardsExpireAfterSeconds: Scalars['Int'];
  trigger?: Maybe<AchievementTrigger>;
  type?: Maybe<AchievementType>;
  updatedAt: Scalars['SequelizeDate'];
  userAchievements: UserAchievementConnection;
  users?: Maybe<Array<Maybe<User>>>;
  /** @deprecated Use rewards instead */
  xpAmount?: Maybe<Scalars['Int']>;
};


export type AchievementUserAchievementsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type AchievementConnection = {
  __typename?: 'AchievementConnection';
  edges?: Maybe<Array<Maybe<AchievementEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type AchievementEdge = {
  __typename?: 'AchievementEdge';
  cursor: Scalars['String'];
  node?: Maybe<Achievement>;
};

export enum AchievementOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type AchievementReward = {
  __typename?: 'AchievementReward';
  amount: Scalars['Float'];
  ancestorBoxId?: Maybe<Scalars['ID']>;
  box?: Maybe<Box>;
  currency?: Maybe<Scalars['String']>;
  itemVariant?: Maybe<ItemVariant>;
  itemVariantId?: Maybe<Scalars['ID']>;
  onlyForMarket?: Maybe<Market>;
  onlyForMarketId?: Maybe<Scalars['ID']>;
  type: AchievementRewardType;
  walletType?: Maybe<WalletType>;
};

export type AchievementRewardInput = {
  amount: Scalars['Float'];
  ancestorBoxId?: InputMaybe<Scalars['ID']>;
  currency?: InputMaybe<Scalars['String']>;
  itemVariantId?: InputMaybe<Scalars['ID']>;
  onlyForMarketId?: InputMaybe<Scalars['ID']>;
  type: AchievementRewardType;
  walletType?: InputMaybe<WalletType>;
};

export enum AchievementRewardType {
  Box = 'BOX',
  ItemVariant = 'ITEM_VARIANT',
  JackpotTicket = 'JACKPOT_TICKET',
  Wallet = 'WALLET',
  Xp = 'XP'
}

export type AchievementTrigger = {
  __typename?: 'AchievementTrigger';
  ancestorBoxId?: Maybe<Scalars['ID']>;
  channels?: Maybe<Array<Maybe<Scalars['String']>>>;
  contains?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  gameTypes?: Maybe<Array<GameType>>;
  minAmount?: Maybe<Scalars['Float']>;
  minPayoutValue?: Maybe<Scalars['Float']>;
  minUserProfit?: Maybe<Scalars['Float']>;
  payoutItemVariantIds?: Maybe<Array<Scalars['ID']>>;
  payoutItemVariants?: Maybe<Array<ItemVariant>>;
  rouletteBetMode?: Maybe<BetMode>;
  rouletteSelections?: Maybe<Array<Maybe<Scalars['Int']>>>;
  type: AchievementTriggerType;
  userItemUsed?: Maybe<Scalars['Boolean']>;
};

export type AchievementTriggerInput = {
  ancestorBoxId?: InputMaybe<Scalars['ID']>;
  channels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  gameTypes?: InputMaybe<Array<GameType>>;
  minAmount?: InputMaybe<Scalars['Float']>;
  minPayoutValue?: InputMaybe<Scalars['Float']>;
  minUserProfit?: InputMaybe<Scalars['Float']>;
  payoutItemVariantIds?: InputMaybe<Array<Scalars['ID']>>;
  rouletteBet?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rouletteBetMode?: InputMaybe<BetMode>;
  rouletteSelections?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  type: AchievementTriggerType;
  userItemUsed?: InputMaybe<Scalars['Boolean']>;
};

export enum AchievementTriggerType {
  ChatMessage = 'CHAT_MESSAGE',
  LostWagerOnGame = 'LOST_WAGER_ON_GAME',
  TwitterFollower = 'TWITTER_FOLLOWER',
  WagerOnGame = 'WAGER_ON_GAME',
  WonWagerOnGame = 'WON_WAGER_ON_GAME'
}

export enum AchievementType {
  ChatMessage = 'CHAT_MESSAGE',
  LostWagerOnGame = 'LOST_WAGER_ON_GAME',
  TwitterFollower = 'TWITTER_FOLLOWER',
  WagerOnGame = 'WAGER_ON_GAME',
  WonWagerOnGame = 'WON_WAGER_ON_GAME'
}

export type ActivateBoostInput = {
  teamId?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
  walletType: WalletType;
};

export type AddCasinoGameProviderGamesInput = {
  featureGroupToAdd: Array<InputMaybe<Scalars['String']>>;
  provider: CasinoGameProviderCode;
  subProviderToLoadGames: CasinoGameProviderCode;
};

export type AddCasinoGameProviderGamesPayload = {
  __typename?: 'AddCasinoGameProviderGamesPayload';
  success: Scalars['Boolean'];
};

export type AddRefreshBoxOpeningStreamTasks = {
  __typename?: 'AddRefreshBoxOpeningStreamTasks';
  success: Scalars['Boolean'];
};

export enum AddRefreshBoxOpeningStreamTasksForCache {
  AllBoxes = 'ALL_BOXES',
  AncestorBoxId = 'ANCESTOR_BOX_ID',
  BoxSlug = 'BOX_SLUG'
}

export type AddRefreshBoxOpeningStreamTasksInput = {
  refreshForCache: Array<AddRefreshBoxOpeningStreamTasksForCache>;
};

export type AddSyncItemPricesTasksInput = {
  itemType: ItemType;
  limit?: InputMaybe<Scalars['Int']>;
  notify?: InputMaybe<Scalars['Boolean']>;
  secret?: InputMaybe<Scalars['String']>;
};

export type AddSyncItemPricesTasksPayload = {
  __typename?: 'AddSyncItemPricesTasksPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type AddUpdateItemVariantsTaskInputPayload = {
  __typename?: 'AddUpdateItemVariantsTaskInputPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type AdditionalRewardClaimInput = {
  walletType: WalletType;
};

export type AdditionalRewardClaimPayload = {
  __typename?: 'AdditionalRewardClaimPayload';
  claimedAmount: Scalars['Float'];
  claimedAt: Scalars['SequelizeDate'];
  walletType: WalletType;
};

export type AffiliateActiveCountInput = {
  affiliateUserId?: InputMaybe<Scalars['ID']>;
  endDate?: InputMaybe<Scalars['SequelizeDate']>;
  startDate?: InputMaybe<Scalars['SequelizeDate']>;
};

export type AffiliateActiveCountResult = {
  __typename?: 'AffiliateActiveCountResult';
  count: Scalars['Int'];
};

export type AffiliateAllTime = {
  __typename?: 'AffiliateAllTime';
  affiliateUserId?: Maybe<Scalars['ID']>;
  avatar?: Maybe<Scalars['String']>;
  commission?: Maybe<Scalars['Float']>;
  deposited?: Maybe<Scalars['Float']>;
  displayName?: Maybe<Scalars['String']>;
  hideSteamProfile?: Maybe<Scalars['Boolean']>;
  lastActiveAt?: Maybe<Scalars['SequelizeDate']>;
  lastDepositAt?: Maybe<Scalars['SequelizeDate']>;
  level?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  refereeId?: Maybe<Scalars['ID']>;
  status?: Maybe<UserAffiliateStatus>;
  url?: Maybe<Scalars['String']>;
  wageredTotal?: Maybe<Scalars['Float']>;
};

export type AffiliateAllTimeEdge = {
  __typename?: 'AffiliateAllTimeEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<AffiliateAllTime>;
};

export type AffiliateAllTimeInput = {
  affiliateUserId: Scalars['ID'];
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  limit?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<AffiliateReportAllTimeOrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<UserAffiliateStatus>;
};

export type AffiliateAllTimeResult = {
  __typename?: 'AffiliateAllTimeResult';
  edges?: Maybe<Array<Maybe<AffiliateAllTimeEdge>>>;
  pageInfo: PageInfo;
  pages?: Maybe<Array<Maybe<Scalars['String']>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AffiliateBlogInput = {
  count: Scalars['Int'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AffiliateBlogPostResult = {
  __typename?: 'AffiliateBlogPostResult';
  date?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type AffiliateBlogPostsPayload = {
  __typename?: 'AffiliateBlogPostsPayload';
  posts?: Maybe<Array<Maybe<AffiliateBlogPostResult>>>;
};

export type AffiliateClaimAmountInput = {
  amount: Scalars['Float'];
};

export type AffiliateEarningsInput = {
  affiliateUserId: Scalars['ID'];
  endDate?: InputMaybe<Scalars['SequelizeDate']>;
  startDate?: InputMaybe<Scalars['SequelizeDate']>;
};

export type AffiliateEarningsResult = {
  __typename?: 'AffiliateEarningsResult';
  commission?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['SequelizeDate']>;
  deposited?: Maybe<Scalars['Float']>;
  wageredBoxOpen?: Maybe<Scalars['Float']>;
  wageredCrash?: Maybe<Scalars['Float']>;
  wageredDice?: Maybe<Scalars['Float']>;
  wageredMatchBetting?: Maybe<Scalars['Float']>;
  wageredPlinko?: Maybe<Scalars['Float']>;
  wageredPvp?: Maybe<Scalars['Float']>;
  wageredRoulette?: Maybe<Scalars['Float']>;
  wageredTotal?: Maybe<Scalars['Float']>;
};

export type AffiliateLoanCancelInput = {
  id: Scalars['ID'];
};

export type AffiliateLoanRequest = Node & {
  __typename?: 'AffiliateLoanRequest';
  acceptedBy?: Maybe<User>;
  acceptedByUserId?: Maybe<Scalars['ID']>;
  amount: Scalars['Float'];
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  status: AffiliateLoanStatus;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId: Scalars['ID'];
};

export type AffiliateLoanRequestArgs = {
  acceptedByUserId?: InputMaybe<Scalars['ID']>;
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['SequelizeDate']>;
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<AffiliateLoanRequestOrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<AffiliateLoanStatus>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type AffiliateLoanRequestConnection = {
  __typename?: 'AffiliateLoanRequestConnection';
  edges?: Maybe<Array<Maybe<AffiliateLoanRequestEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type AffiliateLoanRequestEdge = {
  __typename?: 'AffiliateLoanRequestEdge';
  cursor: Scalars['String'];
  node?: Maybe<AffiliateLoanRequest>;
};

export type AffiliateLoanRequestInput = {
  amount: Scalars['Int'];
  currency: Scalars['String'];
  description: Scalars['String'];
};

export enum AffiliateLoanRequestOrderBy {
  AcceptedByUserId = 'ACCEPTED_BY_USER_ID',
  AcceptedByUserIdDesc = 'ACCEPTED_BY_USER_ID_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Description = 'DESCRIPTION',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Status = 'STATUS',
  StatusDesc = 'STATUS_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UserId = 'USER_ID',
  UserIdDesc = 'USER_ID_DESC'
}

export type AffiliateLoanResponseToInput = {
  id: Scalars['ID'];
  status: AffiliateLoanStatus;
};

export enum AffiliateLoanStatus {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Rejected = 'REJECTED',
  Waiting = 'WAITING'
}

export type AffiliatePromoImageIdentifier = {
  id: Scalars['ID'];
};

export type AffiliatePromoImageInput = {
  file: Scalars['Upload'];
};

export type AffiliateRanJobsByDay = {
  __typename?: 'AffiliateRanJobsByDay';
  day: Scalars['String'];
};

export enum AffiliateReportAllTimeOrderBy {
  /** @deprecated Use LAST_DEPOSIT_DAY */
  AffiliateStatus = 'AFFILIATE_STATUS',
  /** @deprecated Use LAST_DEPOSIT_DAY_DESC */
  AffiliateStatusDesc = 'AFFILIATE_STATUS_DESC',
  Commission = 'COMMISSION',
  CommissionDesc = 'COMMISSION_DESC',
  Deposit = 'DEPOSIT',
  DepositDesc = 'DEPOSIT_DESC',
  DisplayName = 'DISPLAY_NAME',
  DisplayNameDesc = 'DISPLAY_NAME_DESC',
  LastActiveAt = 'LAST_ACTIVE_AT',
  LastActiveAtDesc = 'LAST_ACTIVE_AT_DESC',
  LastDepositDay = 'LAST_DEPOSIT_DAY',
  LastDepositDayDesc = 'LAST_DEPOSIT_DAY_DESC',
  WageredTotal = 'WAGERED_TOTAL',
  WageredTotalDesc = 'WAGERED_TOTAL_DESC'
}

export type AffiliateReportJobInput = {
  jobTypes?: InputMaybe<Array<AffiliateReportJobType>>;
  secret?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['SequelizeDate']>;
};

export enum AffiliateReportJobType {
  AffiliateReport = 'AFFILIATE_REPORT',
  AffiliateReportCommissionActivity = 'AFFILIATE_REPORT_COMMISSION_ACTIVITY',
  AffiliateReportDepositActivity = 'AFFILIATE_REPORT_DEPOSIT_ACTIVITY',
  AffiliateReportSearch = 'AFFILIATE_REPORT_SEARCH'
}

export enum AffiliateReportType {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY'
}

export type AffiliateRewards = {
  __typename?: 'AffiliateRewards';
  attributedPlayers?: Maybe<Scalars['Int']>;
  revShare?: Maybe<Scalars['Float']>;
  revShareValue?: Maybe<Scalars['Float']>;
};

export type AffiliateSearch = Node & {
  __typename?: 'AffiliateSearch';
  affiliateTier?: Maybe<AffiliateTier>;
  affiliateTierId?: Maybe<Scalars['ID']>;
  affiliateUser?: Maybe<User>;
  affiliateUserId?: Maybe<Scalars['ID']>;
  avatar?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastActiveAt?: Maybe<Scalars['SequelizeDate']>;
  market?: Maybe<Market>;
  marketId?: Maybe<Scalars['ID']>;
  totalCommissionEarnt?: Maybe<Scalars['Float']>;
  totalDepositOfReferredUsers?: Maybe<Scalars['Float']>;
  totalDepositorsReferred?: Maybe<Scalars['Int']>;
  totalUsersReferred?: Maybe<Scalars['Int']>;
  totalWithdrawOfReferredUsers?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['BigInt']>;
};

export type AffiliateSearchConnection = {
  __typename?: 'AffiliateSearchConnection';
  edges?: Maybe<Array<Maybe<AffiliateSearchEdge>>>;
  pageInfo: PageInfo;
  pages?: Maybe<Array<Maybe<Scalars['String']>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AffiliateSearchEdge = {
  __typename?: 'AffiliateSearchEdge';
  cursor: Scalars['String'];
  node?: Maybe<AffiliateSearch>;
};

export type AffiliateSearchInputs = {
  affiliateCode?: InputMaybe<Scalars['String']>;
  affiliateTierId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  fuzzy?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['Int']>;
  lastActiveAt?: InputMaybe<Scalars['SequelizeDate']>;
  limit?: InputMaybe<Scalars['Int']>;
  marketId?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<AffiliateSearchOrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  totalCommissionEarnt?: InputMaybe<Scalars['Float']>;
  totalDepositOfReferredUsers?: InputMaybe<Scalars['Float']>;
  totalDepositorsReferred?: InputMaybe<Scalars['Int']>;
  totalUsersReferred?: InputMaybe<Scalars['Int']>;
  totalWithdrawOfReferredUsers?: InputMaybe<Scalars['Float']>;
};

export enum AffiliateSearchOrderBy {
  Commission = 'COMMISSION',
  CommissionDesc = 'COMMISSION_DESC',
  DisplayName = 'DISPLAY_NAME',
  DisplayNameDesc = 'DISPLAY_NAME_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  LastActiveAt = 'LAST_ACTIVE_AT',
  LastActiveAtDesc = 'LAST_ACTIVE_AT_DESC',
  Market = 'MARKET',
  MarketDesc = 'MARKET_DESC',
  Tier = 'TIER',
  TierDesc = 'TIER_DESC',
  TotalDeposit = 'TOTAL_DEPOSIT',
  TotalDepositDesc = 'TOTAL_DEPOSIT_DESC',
  TotalDepositUsers = 'TOTAL_DEPOSIT_USERS',
  TotalDepositUsersDesc = 'TOTAL_DEPOSIT_USERS_DESC',
  TotalUsers = 'TOTAL_USERS',
  TotalUsersDesc = 'TOTAL_USERS_DESC',
  TotalWithdraw = 'TOTAL_WITHDRAW',
  TotalWithdrawDesc = 'TOTAL_WITHDRAW_DESC'
}

export type AffiliateSecretInput = {
  secret: Scalars['String'];
};

export type AffiliateStatusCountResult = {
  __typename?: 'AffiliateStatusCountResult';
  active: Scalars['Int'];
  affiliateUserId: Scalars['ID'];
  retargetable: Scalars['Int'];
  stealable: Scalars['Int'];
  total: Scalars['Int'];
  totalAllTime: Scalars['Int'];
  unconverted: Scalars['Int'];
};

export type AffiliateStatusCountsInput = {
  affiliateUserId: Scalars['ID'];
  endDate?: InputMaybe<Scalars['SequelizeDate']>;
  startDate?: InputMaybe<Scalars['SequelizeDate']>;
};

export type AffiliateTier = Node & {
  __typename?: 'AffiliateTier';
  ancestorAffiliateTierId: Scalars['ID'];
  canClaimItems: Scalars['Boolean'];
  commissionPercentage: Scalars['Float'];
  commissionRequirement?: Maybe<Scalars['Float']>;
  crashPercentage: Scalars['Float'];
  createdAt: Scalars['SequelizeDate'];
  depositPercentage: Scalars['Float'];
  depositRequirement: Scalars['Float'];
  dicePercentage: Scalars['Float'];
  id: Scalars['ID'];
  loanLimit?: Maybe<Scalars['Int']>;
  matchBettingPercentage: Scalars['Float'];
  minimumActiveReferralsClaimRequirement?: Maybe<Scalars['Int']>;
  minimumReferralsClaimRequirement?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  plinkoPercentage: Scalars['Float'];
  promoCodeLimit?: Maybe<Scalars['Int']>;
  pvpPercentage: Scalars['Float'];
  roulettePercentage: Scalars['Float'];
  stickyReferees: Scalars['Boolean'];
  unboxingPercentage: Scalars['Float'];
  updatedAt: Scalars['SequelizeDate'];
};

export type AffiliateTierConnection = {
  __typename?: 'AffiliateTierConnection';
  edges?: Maybe<Array<Maybe<AffiliateTierEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type AffiliateTierEdge = {
  __typename?: 'AffiliateTierEdge';
  cursor: Scalars['String'];
  node?: Maybe<AffiliateTier>;
};

export enum AffiliateTierOrderBy {
  CommissionRequirement = 'COMMISSION_REQUIREMENT',
  CommissionRequirementDesc = 'COMMISSION_REQUIREMENT_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type AffiliateTierPayload = {
  __typename?: 'AffiliateTierPayload';
  affiliateTier: AffiliateTier;
};

export type AffiliateUrlPayload = {
  __typename?: 'AffiliateUrlPayload';
  url: Scalars['String'];
};

export type AffiliateUrlsPayload = {
  __typename?: 'AffiliateUrlsPayload';
  urls?: Maybe<Array<Scalars['String']>>;
};

export type AffiliateUserIdentifier = {
  affiliateUserId: Scalars['ID'];
};

export type AffiliateUserSummary = {
  __typename?: 'AffiliateUserSummary';
  avatar?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  xp?: Maybe<Scalars['String']>;
};

export type Alterations = {
  __typename?: 'Alterations';
  gratuity?: Maybe<Scalars['Float']>;
  manual?: Maybe<Scalars['Float']>;
  sponsorship?: Maybe<Scalars['Float']>;
  support?: Maybe<Scalars['Float']>;
};

export type AnnounceGiveawayInput = {
  giveawayId: Scalars['ID'];
  secret?: InputMaybe<Scalars['String']>;
};

export type AnnounceGiveawayPayload = {
  __typename?: 'AnnounceGiveawayPayload';
  message?: Maybe<Message>;
};

export type ApproveWithdrawalTransactionInput = {
  approved: Scalars['Boolean'];
  transactionId: Scalars['ID'];
};

export type ApproveWithdrawalTransactionPayload = {
  __typename?: 'ApproveWithdrawalTransactionPayload';
  transaction?: Maybe<Transaction>;
};

export type ArAchievementInput = {
  rewardPercentage?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<UserTierRewardType>;
};

export type Asn = {
  __typename?: 'Asn';
  asn: Scalars['String'];
  domain: Scalars['String'];
  name: Scalars['String'];
  route: Scalars['String'];
  type: Scalars['String'];
};

export type Asset = Node & {
  __typename?: 'Asset';
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  fileName: Scalars['String'];
  fileSize: Scalars['String'];
  height?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  updatedAt: Scalars['SequelizeDate'];
  url: Scalars['String'];
  width?: Maybe<Scalars['String']>;
};

export type AssetConnection = {
  __typename?: 'AssetConnection';
  edges?: Maybe<Array<Maybe<AssetEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type AssetEdge = {
  __typename?: 'AssetEdge';
  cursor: Scalars['String'];
  node?: Maybe<Asset>;
};

export enum AssetOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type AuditLog = Node & {
  __typename?: 'AuditLog';
  action: AuditLogAction;
  createdAt: Scalars['SequelizeDate'];
  externalId?: Maybe<Scalars['Int']>;
  externalModel?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  meta?: Maybe<AuditLogMeta>;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
};

export enum AuditLogAction {
  MatchBettingSlipUpdated = 'MATCH_BETTING_SLIP_UPDATED',
  Other = 'OTHER',
  TransactionUpdated = 'TRANSACTION_UPDATED',
  UserBanned = 'USER_BANNED',
  UserMuted = 'USER_MUTED',
  WalletUpdated = 'WALLET_UPDATED'
}

export type AuditLogConnection = {
  __typename?: 'AuditLogConnection';
  edges?: Maybe<Array<Maybe<AuditLogEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type AuditLogEdge = {
  __typename?: 'AuditLogEdge';
  cursor: Scalars['String'];
  node?: Maybe<AuditLog>;
};

export type AuditLogMeta = {
  __typename?: 'AuditLogMeta';
  currency?: Maybe<Scalars['String']>;
  matchBettingSlipStatus?: Maybe<MatchBettingSlipStatus>;
  transactionStatusNew?: Maybe<TransactionStatus>;
  transactionStatusOld?: Maybe<TransactionStatus>;
  userBannedUntil?: Maybe<Scalars['SequelizeDate']>;
  userMutedUntil?: Maybe<Scalars['SequelizeDate']>;
  walletChangeAmount?: Maybe<Scalars['Float']>;
  walletChangeType?: Maybe<WalletChangeType>;
};

export enum AuditLogOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type AuthenticatedUserSubscriptionPayload = {
  __typename?: 'AuthenticatedUserSubscriptionPayload';
  user: User;
};

export type AutoJoinTradeInput = {
  secret?: InputMaybe<Scalars['String']>;
  tradeId: Scalars['ID'];
};

export type AutoJoinTradePayload = {
  __typename?: 'AutoJoinTradePayload';
  trade?: Maybe<Trade>;
};

export type AvailableAsset = {
  __typename?: 'AvailableAsset';
  availableAt?: Maybe<Scalars['SequelizeDate']>;
  steamAsset?: Maybe<SteamAsset>;
  steamAssetId: Scalars['ID'];
};

export type BanSteamBotAssetsInput = {
  steamBotId: Scalars['ID'];
};

export type BanSteamBotAssetsPayload = {
  __typename?: 'BanSteamBotAssetsPayload';
  success: Scalars['Boolean'];
};

export type Bet = Node & {
  __typename?: 'Bet';
  affiliateUserId?: Maybe<Scalars['ID']>;
  amount: Scalars['Float'];
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  game?: Maybe<Game>;
  gameId?: Maybe<Scalars['ID']>;
  gameProviderFeePercent?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  mode?: Maybe<BetMode>;
  payout?: Maybe<Scalars['Float']>;
  payoutMultiplier?: Maybe<Scalars['Float']>;
  processed: Scalars['Boolean'];
  rakeback?: Maybe<Scalars['Float']>;
  rollValue?: Maybe<Scalars['Int']>;
  selection?: Maybe<Scalars['Int']>;
  selections?: Maybe<Array<Scalars['Int']>>;
  ticketsWon: Scalars['Int'];
  type: BetType;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type BetConnection = {
  __typename?: 'BetConnection';
  edges?: Maybe<Array<Maybe<BetEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type BetEdge = {
  __typename?: 'BetEdge';
  cursor: Scalars['String'];
  node?: Maybe<Bet>;
};

export enum BetMode {
  Crazy = 'CRAZY',
  Normal = 'NORMAL'
}

export enum BetOrderBy {
  Amount = 'AMOUNT',
  AmountDesc = 'AMOUNT_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum BetType {
  Legacy = 'LEGACY',
  Modern = 'MODERN'
}

export type BonusAmount = {
  __typename?: 'BonusAmount';
  amount?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  market?: Maybe<Market>;
  marketId?: Maybe<Scalars['ID']>;
};

export type BonusCurrency = {
  __typename?: 'BonusCurrency';
  awarded?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  converted?: Maybe<Scalars['Float']>;
};

export type Boost = {
  __typename?: 'Boost';
  amount?: Maybe<Scalars['Float']>;
  type?: Maybe<PromotionBoostType>;
};

export type Box = Node & {
  __typename?: 'Box';
  ancestorBox?: Maybe<Box>;
  ancestorBoxId: Scalars['ID'];
  availableFrom?: Maybe<Scalars['SequelizeDate']>;
  availableUntil?: Maybe<Scalars['SequelizeDate']>;
  averageProfit?: Maybe<Scalars['Float']>;
  backgroundImageUrl?: Maybe<Scalars['String']>;
  calculatedExpectedValue?: Maybe<Scalars['Float']>;
  calculatedPrice?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['SequelizeDate']>;
  creator?: Maybe<User>;
  creatorId?: Maybe<Scalars['ID']>;
  currency: Scalars['String'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  description?: Maybe<Scalars['String']>;
  discountPercent: Scalars['Float'];
  discountPrice?: Maybe<Scalars['Float']>;
  enabled?: Maybe<Scalars['Boolean']>;
  expectedValue?: Maybe<Scalars['Float']>;
  free?: Maybe<Scalars['Boolean']>;
  giveJackpotTicket?: Maybe<Scalars['Boolean']>;
  houseEdgePercent?: Maybe<Scalars['Float']>;
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isFavorite?: Maybe<Scalars['Boolean']>;
  levelRequired: Scalars['Int'];
  market?: Maybe<Market>;
  marketId: Scalars['ID'];
  maxExpectedValue?: Maybe<Scalars['Float']>;
  maxPurchasesDaily?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  openable?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Scalars['Int']>;
  originalPrice: Scalars['Float'];
  pfVersion: ProvablyFairVersion;
  price?: Maybe<Scalars['Float']>;
  priceFixed?: Maybe<Scalars['Float']>;
  purchasable?: Maybe<Scalars['Boolean']>;
  sellable?: Maybe<Scalars['Boolean']>;
  slotType: BoxSlotType;
  slots: Array<BoxSlot>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  ticketsRewarded: Scalars['Int'];
  totalBoxOpenings: Scalars['Int'];
  totalProfit?: Maybe<Scalars['Float']>;
  totalSpent?: Maybe<Scalars['Float']>;
  totalUnboxedValue?: Maybe<Scalars['Float']>;
  type?: Maybe<BoxType>;
  unopenedUserBoxesCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['SequelizeDate']>;
  userLastPurchasedAt?: Maybe<Scalars['SequelizeDate']>;
  walletRestrictions?: Maybe<Array<Maybe<WalletType>>>;
};


export type BoxSlotsArgs = {
  multiplierBoxBet?: InputMaybe<Scalars['Float']>;
};

export type BoxConnection = {
  __typename?: 'BoxConnection';
  edges?: Maybe<Array<Maybe<BoxEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type BoxEdge = {
  __typename?: 'BoxEdge';
  cursor: Scalars['String'];
  node?: Maybe<Box>;
};

export type BoxItemVariantStat = {
  __typename?: 'BoxItemVariantStat';
  available?: Maybe<Scalars['Int']>;
  consumed?: Maybe<Scalars['Int']>;
  exchanged?: Maybe<Scalars['Int']>;
  itemVariant?: Maybe<ItemVariant>;
  obtained?: Maybe<Scalars['Int']>;
  orderCost?: Maybe<Scalars['Float']>;
  ordered?: Maybe<Scalars['Int']>;
  processing?: Maybe<Scalars['Int']>;
  requested?: Maybe<Scalars['Int']>;
};

export type BoxOpening = Node & {
  __typename?: 'BoxOpening';
  affiliateUserId?: Maybe<Scalars['ID']>;
  balance?: Maybe<Scalars['Float']>;
  box?: Maybe<Box>;
  boxId: Scalars['ID'];
  boxItemId: Scalars['ID'];
  boxValue: Scalars['Float'];
  createdAt?: Maybe<Scalars['SequelizeDate']>;
  currency: Scalars['String'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  gameProviderFeePercent?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  itemValue: Scalars['Float'];
  itemVariant?: Maybe<ItemVariant>;
  itemVariantId?: Maybe<Scalars['ID']>;
  lostToUser?: Maybe<User>;
  lostToUserId?: Maybe<Scalars['ID']>;
  meta?: Maybe<BoxOpeningMeta>;
  pfVersion: ProvablyFairVersion;
  profit: Scalars['Float'];
  pvpBet?: Maybe<PvpBet>;
  pvpBetId?: Maybe<Scalars['ID']>;
  pvpGame?: Maybe<PvpGame>;
  pvpGameId?: Maybe<Scalars['ID']>;
  rakeback?: Maybe<Scalars['Float']>;
  roll?: Maybe<Roll>;
  rollId: Scalars['ID'];
  ticketsWon: Scalars['Int'];
  updatedAt?: Maybe<Scalars['SequelizeDate']>;
  user?: Maybe<User>;
  userBox?: Maybe<UserBox>;
  userBoxId: Scalars['ID'];
  userId: Scalars['ID'];
  userItem?: Maybe<UserItem>;
  userItemId?: Maybe<Scalars['ID']>;
  wonBox?: Maybe<Box>;
  wonBoxId?: Maybe<Scalars['ID']>;
  wonGemstones?: Maybe<Scalars['Float']>;
  wonJackpotTickets?: Maybe<Scalars['Int']>;
  wonMultiplier?: Maybe<Scalars['Float']>;
  wonUserBox?: Maybe<UserBox>;
  wonUserBoxId?: Maybe<Scalars['ID']>;
  wonXp?: Maybe<Scalars['Int']>;
};

export type BoxOpeningConnection = {
  __typename?: 'BoxOpeningConnection';
  edges?: Maybe<Array<Maybe<BoxOpeningEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type BoxOpeningEdge = {
  __typename?: 'BoxOpeningEdge';
  cursor: Scalars['String'];
  node?: Maybe<BoxOpening>;
};

export type BoxOpeningMeta = {
  __typename?: 'BoxOpeningMeta';
  userIsPvpBot?: Maybe<Scalars['Boolean']>;
  xpRewarded?: Maybe<Scalars['BigInt']>;
};

export enum BoxOpeningOrderBy {
  BoxValue = 'BOX_VALUE',
  BoxValueDesc = 'BOX_VALUE_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  ItemValue = 'ITEM_VALUE',
  ItemValueDesc = 'ITEM_VALUE_DESC'
}

export type BoxOpeningStats = {
  __typename?: 'BoxOpeningStats';
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  totalBalance?: Maybe<Scalars['Float']>;
  totalBoxValue?: Maybe<Scalars['Float']>;
  totalGemstones?: Maybe<Scalars['Float']>;
  totalItemValue?: Maybe<Scalars['Float']>;
  totalJackpotTickets?: Maybe<Scalars['Int']>;
  totalPayout?: Maybe<Scalars['Float']>;
  totalProfit?: Maybe<Scalars['Float']>;
  totalWonBoxValue?: Maybe<Scalars['Float']>;
  totalXp?: Maybe<Scalars['Float']>;
};

export enum BoxOrderBy {
  AncestorBoxId = 'ANCESTOR_BOX_ID',
  AncestorBoxIdDesc = 'ANCESTOR_BOX_ID_DESC',
  AncestorTotalBoxOpenings = 'ANCESTOR_TOTAL_BOX_OPENINGS',
  AncestorTotalBoxOpeningsDesc = 'ANCESTOR_TOTAL_BOX_OPENINGS_DESC',
  AncestorTotalSpent = 'ANCESTOR_TOTAL_SPENT',
  AncestorTotalSpentDesc = 'ANCESTOR_TOTAL_SPENT_DESC',
  CostAsc = 'COST_ASC',
  CostDesc = 'COST_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MinLevelRequired = 'MIN_LEVEL_REQUIRED',
  MinLevelRequiredDesc = 'MIN_LEVEL_REQUIRED_DESC',
  Order = 'ORDER',
  OrderAsc = 'ORDER_ASC',
  OrderDesc = 'ORDER_DESC',
  TotalBoxOpenings = 'TOTAL_BOX_OPENINGS',
  TotalBoxOpeningsDesc = 'TOTAL_BOX_OPENINGS_DESC',
  TotalSpent = 'TOTAL_SPENT',
  TotalSpentDesc = 'TOTAL_SPENT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  Value = 'VALUE',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

export type BoxOrderItem = {
  id: Scalars['ID'];
  order: Scalars['Int'];
};

export type BoxSlot = {
  __typename?: 'BoxSlot';
  balance?: Maybe<Scalars['Float']>;
  box?: Maybe<Box>;
  boxId?: Maybe<Scalars['ID']>;
  gemstones?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  item?: Maybe<Item>;
  itemId?: Maybe<Scalars['ID']>;
  itemVariant?: Maybe<ItemVariant>;
  jackpotTickets?: Maybe<Scalars['Int']>;
  multiplier?: Maybe<Scalars['Float']>;
  multiplierType?: Maybe<BoxSlotMultiplierType>;
  rate?: Maybe<Scalars['Float']>;
  rollEnd?: Maybe<Scalars['Float']>;
  rollStart?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Int']>;
};

export type BoxSlotInput = {
  boxId?: InputMaybe<Scalars['ID']>;
  gemstones?: InputMaybe<Scalars['Float']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  itemId?: InputMaybe<Scalars['ID']>;
  jackpotTickets?: InputMaybe<Scalars['Int']>;
  multiplier?: InputMaybe<Scalars['Float']>;
  multiplierType?: InputMaybe<BoxSlotMultiplierType>;
  rate: Scalars['Float'];
  xp?: InputMaybe<Scalars['Int']>;
};

export enum BoxSlotMultiplierType {
  Balance = 'BALANCE',
  ItemVariant = 'ITEM_VARIANT'
}

export enum BoxSlotType {
  Multiplier = 'MULTIPLIER',
  Regular = 'REGULAR'
}

export type BoxStat = {
  __typename?: 'BoxStat';
  averageProfit?: Maybe<Scalars['Float']>;
  box?: Maybe<Box>;
  itemValue?: Maybe<Scalars['Float']>;
  openCount?: Maybe<Scalars['Int']>;
  profit?: Maybe<Scalars['Float']>;
  totalAcquiredValue?: Maybe<Scalars['Float']>;
  totalConsumedValue?: Maybe<Scalars['Float']>;
  /** @deprecated Too heavy and not valuable enough right now */
  totalOrderCost?: Maybe<Scalars['Float']>;
};

export enum BoxType {
  Custom = 'CUSTOM',
  Official = 'OFFICIAL'
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Calendar = Node & {
  __typename?: 'Calendar';
  createdAt: Scalars['SequelizeDate'];
  creator: User;
  creatorId: Scalars['ID'];
  dailyOpenCount: Scalars['Int'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  endAt: Scalars['SequelizeDate'];
  entries: CalendarEntryConnection;
  id: Scalars['ID'];
  name: Scalars['String'];
  rewards: Array<CalendarReward>;
  startAt: Scalars['SequelizeDate'];
  updatedAt: Scalars['SequelizeDate'];
};

export type CalendarConnection = {
  __typename?: 'CalendarConnection';
  edges?: Maybe<Array<Maybe<CalendarEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type CalendarEdge = {
  __typename?: 'CalendarEdge';
  cursor: Scalars['String'];
  node?: Maybe<Calendar>;
};

export type CalendarEntry = Node & {
  __typename?: 'CalendarEntry';
  calendar: Calendar;
  calendarId: Scalars['ID'];
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  rewardCount: Scalars['Int'];
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
};

export type CalendarEntryConnection = {
  __typename?: 'CalendarEntryConnection';
  edges?: Maybe<Array<Maybe<CalendarEntryEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type CalendarEntryEdge = {
  __typename?: 'CalendarEntryEdge';
  cursor: Scalars['String'];
  node?: Maybe<CalendarEntry>;
};

export enum CalendarEntryOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum CalendarOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type CalendarReward = {
  __typename?: 'CalendarReward';
  chance: Scalars['Float'];
  lastDeposit?: Maybe<Scalars['Duration']>;
  level?: Maybe<Scalars['Int']>;
  maxAmount: Scalars['Int'];
  minAmount: Scalars['Int'];
};

export type CalendarRewardInput = {
  chance: Scalars['Float'];
  lastDeposit?: InputMaybe<Scalars['Duration']>;
  level?: InputMaybe<Scalars['Int']>;
  maxAmount: Scalars['Int'];
  minAmount: Scalars['Int'];
};

export type CallPvpBotForRematchInput = {
  pvpGameId: Scalars['ID'];
  secret?: InputMaybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type CallPvpBotForRematchPayload = {
  __typename?: 'CallPvpBotForRematchPayload';
  success: Scalars['Boolean'];
};

export type CallPvpBotInput = {
  pvpGameId: Scalars['ID'];
  teamSelection?: InputMaybe<Scalars['Int']>;
};

export type CallPvpBotPayload = {
  __typename?: 'CallPvpBotPayload';
  success: Scalars['Boolean'];
};

export enum CancelReason {
  Expired = 'EXPIRED',
  NoConfirmation = 'NO_CONFIRMATION',
  RevokedApiKey = 'REVOKED_API_KEY',
  UserCancelled = 'USER_CANCELLED'
}

export type CancelTradeInput = {
  tradeId: Scalars['ID'];
};

export type CancelTradePayload = {
  __typename?: 'CancelTradePayload';
  trade: Trade;
};

export type CancelZbtTradeInput = {
  zbtTradeId: Scalars['ID'];
};

export type CancelZbtTradePayload = {
  __typename?: 'CancelZbtTradePayload';
  success: Scalars['Boolean'];
};

export type CancelZincOrderInput = {
  zincOrderId: Scalars['ID'];
};

export type CancelZincOrderPayload = {
  __typename?: 'CancelZincOrderPayload';
  zincOrder?: Maybe<ZincOrder>;
};

export type Carrier = {
  __typename?: 'Carrier';
  mcc?: Maybe<Scalars['String']>;
  mnc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CashPlayMetrics = {
  __typename?: 'CashPlayMetrics';
  baseEdgeExpectedGgr?: Maybe<Scalars['Float']>;
  difference?: Maybe<Scalars['Float']>;
  expected?: Maybe<Scalars['Float']>;
  expectedGgr?: Maybe<Scalars['Float']>;
  ggr?: Maybe<Scalars['Float']>;
  ggrWithRewards?: Maybe<Scalars['Float']>;
  wagered?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Float']>;
};

export type CasinoGame = Node & {
  __typename?: 'CasinoGame';
  asset?: Maybe<Asset>;
  assets?: Maybe<Array<Asset>>;
  availableFeatureGroups?: Maybe<Array<CasinoGameFeatureGroup>>;
  availableProviders?: Maybe<Array<CasinoGameProvider>>;
  casinoGameProviderConfigs?: Maybe<Array<CasinoGameProviderConfig>>;
  casinoGameSelectedProvider: CasinoGameProvider;
  casinoGameSelectedProviderId?: Maybe<Scalars['ID']>;
  category?: Maybe<CasinoGameCategory>;
  createdAt?: Maybe<Scalars['SequelizeDate']>;
  description?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  hasFreeSpins?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  isLive?: Maybe<Scalars['Boolean']>;
  lines?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  recalledAt?: Maybe<Scalars['SequelizeDate']>;
  releasedAt?: Maybe<Scalars['SequelizeDate']>;
  selectedFeatureGroup?: Maybe<CasinoGameFeatureGroup>;
  slug: Scalars['String'];
  studio?: Maybe<CasinoGameProviderCode>;
  studioDisplayValue?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['SequelizeDate']>;
  width?: Maybe<Scalars['Int']>;
};


export type CasinoGameAssetArgs = {
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type CasinoGameAction = Node & {
  __typename?: 'CasinoGameAction';
  amount?: Maybe<Scalars['Float']>;
  baseAmount?: Maybe<Scalars['Float']>;
  baseCurrency: Scalars['String'];
  baseCurrencyRate?: Maybe<Scalars['Float']>;
  casinoGameRound?: Maybe<CasinoGameRound>;
  casinoGameRoundId: Scalars['ID'];
  casinoGameSession?: Maybe<CasinoGameSession>;
  casinoGameSessionId: Scalars['ID'];
  createdAt?: Maybe<Scalars['SequelizeDate']>;
  currency: Scalars['String'];
  excluded: Scalars['Boolean'];
  externalActionId: Scalars['ID'];
  externalRollbackActionId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  jackpotContribution?: Maybe<Scalars['Float']>;
  jackpotWin?: Maybe<Scalars['Float']>;
  rollbackAction?: Maybe<CasinoGameAction>;
  rollbackActionId?: Maybe<Scalars['ID']>;
  type: CasinoGameActionType;
  updatedAt?: Maybe<Scalars['SequelizeDate']>;
  userCurrency: Scalars['String'];
  userCurrencyAmount?: Maybe<Scalars['Float']>;
};

export type CasinoGameActionConnection = {
  __typename?: 'CasinoGameActionConnection';
  edges?: Maybe<Array<Maybe<CasinoGameActionEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type CasinoGameActionEdge = {
  __typename?: 'CasinoGameActionEdge';
  cursor: Scalars['String'];
  node?: Maybe<CasinoGameAction>;
};

export enum CasinoGameActionType {
  Bet = 'BET',
  Rollback = 'ROLLBACK',
  Win = 'WIN'
}

export enum CasinoGameCategory {
  Card = 'CARD',
  Casual = 'CASUAL',
  Craps = 'CRAPS',
  Crash = 'CRASH',
  Fishing = 'FISHING',
  Lottery = 'LOTTERY',
  Poker = 'POKER',
  Roulette = 'ROULETTE',
  Slots = 'SLOTS',
  VideoPoker = 'VIDEO_POKER',
  VirtualSports = 'VIRTUAL_SPORTS'
}

export type CasinoGameConnection = {
  __typename?: 'CasinoGameConnection';
  edges?: Maybe<Array<Maybe<CasinoGameEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type CasinoGameEdge = {
  __typename?: 'CasinoGameEdge';
  cursor: Scalars['String'];
  node?: Maybe<CasinoGame>;
};

export enum CasinoGameFeatureGroup {
  Basic = 'BASIC',
  BasicRtp = 'BASIC_RTP',
  BasicRtp94 = 'BASIC_RTP94',
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
  New = 'NEW'
}

export type CasinoGameLobby = Node & {
  __typename?: 'CasinoGameLobby';
  casinoGameProviderTotalGames?: Maybe<Array<Maybe<CasinoGameProviderTotalGamesPayload>>>;
  casinoGames: CasinoGameConnection;
  createdAt: Scalars['SequelizeDate'];
  id: Scalars['ID'];
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  positionedCasinoGames?: Maybe<Array<CasinoGameLobbyPositionedGame>>;
  slug: Scalars['String'];
  updatedAt: Scalars['SequelizeDate'];
};


export type CasinoGameLobbyCasinoGameProviderTotalGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<CasinoGameOrderBy>>>;
  partialSearch?: InputMaybe<Scalars['String']>;
  providers?: InputMaybe<Array<InputMaybe<CasinoGameProviderCode>>>;
};


export type CasinoGameLobbyCasinoGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<InputMaybe<CasinoGameCategory>>>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  isLive?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<CasinoGameOrderBy>>>;
  slug?: InputMaybe<Scalars['String']>;
  studios?: InputMaybe<Array<InputMaybe<CasinoGameProviderCode>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type CasinoGameLobbyConnection = {
  __typename?: 'CasinoGameLobbyConnection';
  edges?: Maybe<Array<CasinoGameLobbyEdge>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type CasinoGameLobbyEdge = {
  __typename?: 'CasinoGameLobbyEdge';
  cursor: Scalars['String'];
  node?: Maybe<CasinoGameLobby>;
};

export enum CasinoGameLobbyOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Order = 'ORDER',
  OrderDesc = 'ORDER_DESC'
}

export type CasinoGameLobbyPositionedGame = {
  __typename?: 'CasinoGameLobbyPositionedGame';
  casinoGame: CasinoGame;
  casinoGameId: Scalars['ID'];
  index: Scalars['Int'];
};

export enum CasinoGameOrderBy {
  Category = 'CATEGORY',
  CategoryDesc = 'CATEGORY_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Order = 'ORDER',
  OrderDesc = 'ORDER_DESC',
  Studio = 'STUDIO',
  StudioDesc = 'STUDIO_DESC',
  Title = 'TITLE',
  TitleDesc = 'TITLE_DESC'
}

export type CasinoGameProvider = Node & {
  __typename?: 'CasinoGameProvider';
  createdAt: Scalars['SequelizeDate'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  monthlyFeeBasic: Scalars['Int'];
  monthlyFeeBrand?: Maybe<Scalars['Int']>;
  monthlyFeeJackpot?: Maybe<Scalars['Int']>;
  monthlyFeePartners?: Maybe<Scalars['Int']>;
  monthlyFeePremium?: Maybe<Scalars['Int']>;
  monthlyFeeTable?: Maybe<Scalars['Int']>;
  provider: CasinoGameProviderCode;
  studio: CasinoGameProviderCode;
  studioDisplayValue?: Maybe<Scalars['String']>;
  subProvider: CasinoGameProviderCode;
  updatedAt: Scalars['SequelizeDate'];
};

export enum CasinoGameProviderCode {
  Acceptance = 'ACCEPTANCE',
  Ainsworth = 'AINSWORTH',
  Airdice = 'AIRDICE',
  Alg = 'ALG',
  All41Studios = 'ALL41STUDIOS',
  Altenar = 'ALTENAR',
  Amatic = 'AMATIC',
  Atmosfera = 'ATMOSFERA',
  Atmosphera = 'ATMOSPHERA',
  Authentic = 'AUTHENTIC',
  Avatarux = 'AVATARUX',
  Baddingo = 'BADDINGO',
  Bally = 'BALLY',
  Ballywulff = 'BALLYWULFF',
  Bangbanggames = 'BANGBANGGAMES',
  Barcrest = 'BARCREST',
  Bbgames = 'BBGAMES',
  Belatra = 'BELATRA',
  Bet2Tech = 'BET2TECH',
  Bgaming = 'BGAMING',
  Bigtimegaming = 'BIGTIMEGAMING',
  Blueprint = 'BLUEPRINT',
  Boomerangstudios = 'BOOMERANGSTUDIOS',
  Booming = 'BOOMING',
  Booongo = 'BOOONGO',
  Bsg = 'BSG',
  Bulletproof = 'BULLETPROOF',
  Caleta = 'CALETA',
  Cashpoint = 'CASHPOINT',
  Crazytooth = 'CRAZYTOOTH',
  Dicelabs = 'DICELABS',
  Eagaming = 'EAGAMING',
  Edict = 'EDICT',
  Egt = 'EGT',
  Electricelephant = 'ELECTRICELEPHANT',
  Elk = 'ELK',
  Endorphina = 'ENDORPHINA',
  Epicmedia = 'EPICMEDIA',
  Everymatrix = 'EVERYMATRIX',
  Evolution = 'EVOLUTION',
  Evoplay = 'EVOPLAY',
  Ezugi = 'EZUGI',
  Fantasma = 'FANTASMA',
  Fantasmagames = 'FANTASMAGAMES',
  Fazi = 'FAZI',
  Felixgaming = 'FELIXGAMING',
  Foxium = 'FOXIUM',
  Fugaso = 'FUGASO',
  Gameart = 'GAMEART',
  Gamebeat = 'GAMEBEAT',
  Gameburgerstudios = 'GAMEBURGERSTUDIOS',
  Gamesinc = 'GAMESINC',
  Gamevy = 'GAMEVY',
  Gaming1 = 'GAMING1',
  Gamomat = 'GAMOMAT',
  Gamzix = 'GAMZIX',
  Goldenhero = 'GOLDENHERO',
  Goldenrace = 'GOLDENRACE',
  Greenjade = 'GREENJADE',
  Groove = 'GROOVE',
  Habanero = 'HABANERO',
  Hacksaw = 'HACKSAW',
  Hacksawgaming = 'HACKSAWGAMING',
  High5 = 'HIGH5',
  Hollegames = 'HOLLEGAMES',
  Hotrisegames = 'HOTRISEGAMES',
  Hub88 = 'HUB88',
  Igtech = 'IGTECH',
  Infin = 'INFIN',
  Inspired = 'INSPIRED',
  Irondog = 'IRONDOG',
  Irondogstudio = 'IRONDOGSTUDIO',
  Isb = 'ISB',
  Isoftbet = 'ISOFTBET',
  Jaderabbit = 'JADERABBIT',
  Kagaming = 'KAGAMING',
  Kalamba = 'KALAMBA',
  Kiron = 'KIRON',
  Leander = 'LEANDER',
  Leandergames = 'LEANDERGAMES',
  Leapgaming = 'LEAPGAMING',
  Lightningbox = 'LIGHTNINGBOX',
  Lightwonder = 'LIGHTWONDER',
  Lucky = 'LUCKY',
  Luckystreak = 'LUCKYSTREAK',
  Mancala = 'MANCALA',
  Mascot = 'MASCOT',
  Maxwingaming = 'MAXWINGAMING',
  Men = 'MEN',
  Merkur = 'MERKUR',
  Microgaming = 'MICROGAMING',
  Mojos = 'MOJOS',
  Mrslotty = 'MRSLOTTY',
  Nekogames = 'NEKOGAMES',
  Netent = 'NETENT',
  Netgame = 'NETGAME',
  Nextgen = 'NEXTGEN',
  Nolimit = 'NOLIMIT',
  Nolimitcity = 'NOLIMITCITY',
  Northernlights = 'NORTHERNLIGHTS',
  Novomatic = 'NOVOMATIC',
  Nucleus = 'NUCLEUS',
  Nyx = 'NYX',
  Onetouch = 'ONETOUCH',
  Onextwogaming = 'ONEXTWOGAMING',
  Onlyplay = 'ONLYPLAY',
  Oryx = 'ORYX',
  Pariplay = 'PARIPLAY',
  Pearfiction = 'PEARFICTION',
  Petersons = 'PETERSONS',
  Pgsoft = 'PGSOFT',
  Pinnacle = 'PINNACLE',
  Pipa = 'PIPA',
  Platipus = 'PLATIPUS',
  Playngo = 'PLAYNGO',
  Playson = 'PLAYSON',
  Playtech = 'PLAYTECH',
  Pragmaticexternal = 'PRAGMATICEXTERNAL',
  Pragmaticplay = 'PRAGMATICPLAY',
  Pragmaticplaylive = 'PRAGMATICPLAYLIVE',
  Pushgaming = 'PUSHGAMING',
  Quickfire = 'QUICKFIRE',
  Quickspin = 'QUICKSPIN',
  Rabcat = 'RABCAT',
  Realdealer = 'REALDEALER',
  Red7 = 'RED7',
  Redrake = 'REDRAKE',
  Redtiger = 'REDTIGER',
  Reellifegames = 'REELLIFEGAMES',
  Reelplay = 'REELPLAY',
  Reeltimegaming = 'REELTIMEGAMING',
  Reevo = 'REEVO',
  Reflexgaming = 'REFLEXGAMING',
  Relax = 'RELAX',
  Retrogaming = 'RETROGAMING',
  Sapphire = 'SAPPHIRE',
  Sgdigital = 'SGDIGITAL',
  Shufflemaster = 'SHUFFLEMASTER',
  Sidecity = 'SIDECITY',
  Slotegrator = 'SLOTEGRATOR',
  Slotmill = 'SLOTMILL',
  Smartsoft = 'SMARTSOFT',
  Snowborn = 'SNOWBORN',
  Softswiss = 'SOFTSWISS',
  Spearhead = 'SPEARHEAD',
  Spin4Win = 'SPIN4WIN',
  Spinomenal = 'SPINOMENAL',
  Spinplay = 'SPINPLAY',
  Spribe = 'SPRIBE',
  Stakelogic = 'STAKELOGIC',
  Sthlmgaming = 'STHLMGAMING',
  Swintt = 'SWINTT',
  Technology = 'TECHNOLOGY',
  Test = 'TEST',
  Theplayer = 'THEPLAYER',
  Thunderkick = 'THUNDERKICK',
  Tma = 'TMA',
  Tomhorn = 'TOMHORN',
  Truelab = 'TRUELAB',
  Tvbet = 'TVBET',
  Vivogaming = 'VIVOGAMING',
  Wazdan = 'WAZDAN',
  Wizard = 'WIZARD',
  Wms = 'WMS',
  X2Gaming = 'X2GAMING',
  Yggdrasil = 'YGGDRASIL',
  Zillion = 'ZILLION'
}

export type CasinoGameProviderConfig = Node & {
  __typename?: 'CasinoGameProviderConfig';
  casinoGame: CasinoGame;
  casinoGameId: Scalars['ID'];
  casinoGameProviderId: Scalars['ID'];
  createdAt: Scalars['SequelizeDate'];
  devices?: Maybe<Array<Device>>;
  featureGroup: CasinoGameFeatureGroup;
  id: Scalars['ID'];
  identifier: Scalars['String'];
  payout?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['SequelizeDate'];
  volatilityRating?: Maybe<CasinoGameVolatilityRating>;
};

export type CasinoGameProviderConfigConnection = {
  __typename?: 'CasinoGameProviderConfigConnection';
  edges?: Maybe<Array<Maybe<CasinoGameProviderConfigEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type CasinoGameProviderConfigEdge = {
  __typename?: 'CasinoGameProviderConfigEdge';
  cursor: Scalars['String'];
  node?: Maybe<CasinoGameProviderConfig>;
};

export enum CasinoGameProviderConfigOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type CasinoGameProviderConnection = {
  __typename?: 'CasinoGameProviderConnection';
  edges?: Maybe<Array<Maybe<CasinoGameProviderEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type CasinoGameProviderEdge = {
  __typename?: 'CasinoGameProviderEdge';
  cursor: Scalars['String'];
  node?: Maybe<CasinoGameProvider>;
};

export enum CasinoGameProviderOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type CasinoGameProviderTotalGamesPayload = {
  __typename?: 'CasinoGameProviderTotalGamesPayload';
  provider?: Maybe<CasinoGameProviderCode>;
  providerDisplayValue?: Maybe<Scalars['String']>;
  totalGames?: Maybe<Scalars['Int']>;
};

export type CasinoGameRound = Node & {
  __typename?: 'CasinoGameRound';
  actions: CasinoGameActionConnection;
  casinoGameSession: CasinoGameSession;
  casinoGameSessionId: Scalars['ID'];
  createdAt?: Maybe<Scalars['SequelizeDate']>;
  currency: Scalars['String'];
  externalId: Scalars['String'];
  finishedAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  rakebackGenerated?: Maybe<Scalars['Float']>;
  status: CasinoGameRoundStatus;
  totalBet?: Maybe<Scalars['Float']>;
  totalWin?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['SequelizeDate']>;
  user: User;
  userId: Scalars['ID'];
};


export type CasinoGameRoundActionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};

export type CasinoGameRoundConnection = {
  __typename?: 'CasinoGameRoundConnection';
  edges?: Maybe<Array<Maybe<CasinoGameRoundEdge>>>;
  pageInfo: PageInfo;
  pages?: Maybe<Array<Maybe<Scalars['String']>>>;
  total?: Maybe<Scalars['Int']>;
};

export type CasinoGameRoundEdge = {
  __typename?: 'CasinoGameRoundEdge';
  cursor: Scalars['String'];
  node?: Maybe<CasinoGameRound>;
};

export enum CasinoGameRoundOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum CasinoGameRoundStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Created = 'CREATED',
  Notified = 'NOTIFIED'
}

export type CasinoGameSession = Node & {
  __typename?: 'CasinoGameSession';
  baseCurrency?: Maybe<Scalars['String']>;
  baseCurrencyRate?: Maybe<Scalars['Float']>;
  baseTotalBet?: Maybe<Scalars['Float']>;
  baseTotalPayout?: Maybe<Scalars['Float']>;
  baseTotalProfit?: Maybe<Scalars['Float']>;
  casinoGameProviderConfig: CasinoGameProviderConfig;
  casinoGameProviderConfigId: Scalars['ID'];
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  gameUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ipAddress?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  strategy?: Maybe<CasinoGameSessionStrategy>;
  totalBet?: Maybe<Scalars['Float']>;
  totalPayout?: Maybe<Scalars['Float']>;
  totalProfit?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['SequelizeDate'];
  userCurrency?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type CasinoGameSessionConnection = {
  __typename?: 'CasinoGameSessionConnection';
  edges?: Maybe<Array<Maybe<CasinoGameSessionEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type CasinoGameSessionEdge = {
  __typename?: 'CasinoGameSessionEdge';
  cursor: Scalars['String'];
  node?: Maybe<CasinoGameSession>;
};

export enum CasinoGameSessionOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type CasinoGameSessionPayload = {
  __typename?: 'CasinoGameSessionPayload';
  gameUrl: Scalars['String'];
  properties?: Maybe<Scalars['JSON']>;
  strategy: CasinoGameSessionStrategy;
};

export enum CasinoGameSessionStrategy {
  Detect = 'DETECT',
  Iframe = 'IFRAME',
  Redirect = 'REDIRECT'
}

export type CasinoGameStats = {
  __typename?: 'CasinoGameStats';
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  totalBet?: Maybe<Scalars['Float']>;
  totalPayout?: Maybe<Scalars['Float']>;
  totalProfit?: Maybe<Scalars['Float']>;
};

export enum CasinoGameVolatilityRating {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
  MediumHigh = 'MEDIUM_HIGH',
  MediumLow = 'MEDIUM_LOW',
  VeryHigh = 'VERY_HIGH'
}

export type ChangeSeedInput = {
  type: SeedType;
  value?: InputMaybe<Scalars['String']>;
};

export type ChangeSeedPayload = {
  __typename?: 'ChangeSeedPayload';
  seed: Seed;
  seeds: Array<Seed>;
};

export type CheckSteamBotActivityInput = {
  secret: Scalars['String'];
};

export type CheckSteamBotActivityPlayload = {
  __typename?: 'CheckSteamBotActivityPlayload';
  success: Scalars['Boolean'];
};

export type CheckUserItemStatusInput = {
  secret: Scalars['String'];
  userItemId: Array<Scalars['ID']>;
};

export type CheckUserItemStatusPayload = {
  __typename?: 'CheckUserItemStatusPayload';
  userItem: UserItem;
  userItems: Array<UserItem>;
};

export type ClaimUserAchievementInput = {
  userAchievementId: Scalars['ID'];
};

export type ClaimUserAchievementPayload = {
  __typename?: 'ClaimUserAchievementPayload';
  userAchievement: UserAchievement;
};

export type ClaimUserTierAssetSubscriptionPayload = {
  __typename?: 'ClaimUserTierAssetSubscriptionPayload';
  userAsset: UserAsset;
};

export type CleanUpCooldownTradesInput = {
  secret: Scalars['String'];
};

export type CleanUpCooldownTradesPayload = {
  __typename?: 'CleanUpCooldownTradesPayload';
  success: Scalars['Boolean'];
};

export type CleanUpStalePvpGamesInput = {
  lastRoundNumber?: InputMaybe<Scalars['Int']>;
  pvpGameId?: InputMaybe<Scalars['ID']>;
  secret: Scalars['String'];
};

export type CleanUpStalePvpGamesPayload = {
  __typename?: 'CleanUpStalePvpGamesPayload';
  success: Scalars['Boolean'];
};

export type CleanUpTradesInput = {
  secret: Scalars['String'];
};

export type CleanUpTradesPayload = {
  __typename?: 'CleanUpTradesPayload';
  success: Scalars['Boolean'];
};

export type CloneItemInput = {
  itemId: Scalars['ID'];
  targetMarketId: Scalars['ID'];
};

export type CloneItemPayload = {
  __typename?: 'CloneItemPayload';
  item?: Maybe<Item>;
};

export type CloneMarketPayload = {
  __typename?: 'CloneMarketPayload';
  market?: Maybe<Market>;
};

export type CommitVersion = {
  __typename?: 'CommitVersion';
  sha?: Maybe<Scalars['String']>;
  shortSha?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
};

export type CompleteGameJackpotInput = {
  gameId?: InputMaybe<Scalars['ID']>;
  gameJackpotId: Scalars['ID'];
};

export type CompleteGameJackpotPayload = {
  __typename?: 'CompleteGameJackpotPayload';
  gameJackpot?: Maybe<GameJackpot>;
};

export type CompleteJackpotInput = {
  jackpotId: Scalars['ID'];
};

export type CompleteJackpotPayload = {
  __typename?: 'CompleteJackpotPayload';
  jackpot: Jackpot;
};

export type CompleteMatchBettingSlipInput = {
  isRollback: Scalars['Boolean'];
  matchBettingSlipId: Scalars['ID'];
  secret?: InputMaybe<Scalars['String']>;
};

export type CompleteMatchBettingSlipPayload = {
  __typename?: 'CompleteMatchBettingSlipPayload';
  success: Scalars['Boolean'];
};

export type CompleteTradeInput = {
  tradeId: Scalars['ID'];
};

export type CompleteTradePayload = {
  __typename?: 'CompleteTradePayload';
  trade: Trade;
};

export type ConsolidateWalletsInput = {
  fromCurrency?: InputMaybe<Scalars['String']>;
  toCurrency?: InputMaybe<Scalars['String']>;
  toWalletType?: InputMaybe<WalletType>;
  userId?: InputMaybe<Scalars['ID']>;
  walletId?: InputMaybe<Scalars['ID']>;
  walletType?: InputMaybe<WalletType>;
};

export type ConsolidateWalletsPayload = {
  __typename?: 'ConsolidateWalletsPayload';
  wallets?: Maybe<Array<Wallet>>;
};

export type Country = {
  __typename?: 'Country';
  code?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  dialCode?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  european?: Maybe<Scalars['Boolean']>;
  flag?: Maybe<Scalars['String']>;
  minimumAge?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CrashBet = Node & {
  __typename?: 'CrashBet';
  affiliateUserId?: Maybe<Scalars['ID']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  desiredItemVariant?: Maybe<ItemVariant>;
  desiredItemVariantId?: Maybe<Scalars['ID']>;
  game?: Maybe<CrashGame>;
  gameId?: Maybe<Scalars['ID']>;
  gameProviderFeePercent?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  items?: Maybe<CrashBetItemConnection>;
  maxTick?: Maybe<Scalars['Int']>;
  mode: CrashBetMode;
  rakeback?: Maybe<Scalars['Float']>;
  remainderWinAmount?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Int']>;
  ticketsWon: Scalars['Int'];
  totalBet?: Maybe<Scalars['Float']>;
  totalWinAmount?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  userItem?: Maybe<UserItem>;
  userItemId?: Maybe<Scalars['ID']>;
};


export type CrashBetItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<CrashBetItemOrderBy>>>;
};

export type CrashBetConnection = {
  __typename?: 'CrashBetConnection';
  edges?: Maybe<Array<Maybe<CrashBetEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type CrashBetEdge = {
  __typename?: 'CrashBetEdge';
  cursor: Scalars['String'];
  node?: Maybe<CrashBet>;
};

export type CrashBetItem = Node & {
  __typename?: 'CrashBetItem';
  crashBet?: Maybe<CrashBet>;
  crashBetId: Scalars['ID'];
  createdAt: Scalars['SequelizeDate'];
  id: Scalars['ID'];
  itemVariant?: Maybe<ItemVariant>;
  itemVariantId: Scalars['ID'];
  updatedAt: Scalars['SequelizeDate'];
  userItem?: Maybe<UserItem>;
  userItemId?: Maybe<Scalars['ID']>;
};

export type CrashBetItemConnection = {
  __typename?: 'CrashBetItemConnection';
  edges?: Maybe<Array<Maybe<CrashBetItemEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type CrashBetItemEdge = {
  __typename?: 'CrashBetItemEdge';
  cursor: Scalars['String'];
  node?: Maybe<CrashBetItem>;
};

export enum CrashBetItemOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type CrashBetItemVariantConnection = {
  __typename?: 'CrashBetItemVariantConnection';
  edges?: Maybe<Array<Maybe<CrashBetItemVariantEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type CrashBetItemVariantEdge = {
  __typename?: 'CrashBetItemVariantEdge';
  cursor: Scalars['String'];
  node?: Maybe<ItemVariant>;
};

export enum CrashBetMode {
  CoinsOnly = 'COINS_ONLY',
  ItemsAndCoins = 'ITEMS_AND_COINS'
}

export enum CrashBetOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type CrashBetStats = {
  __typename?: 'CrashBetStats';
  commonAmounts: Array<Scalars['Float']>;
  commonMaxTicks: Array<Scalars['Int']>;
};

export type CrashGame = Node & {
  __typename?: 'CrashGame';
  bets?: Maybe<CrashBetConnection>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  id: Scalars['ID'];
  roll?: Maybe<Scalars['Int']>;
  scheduledAt?: Maybe<Scalars['SequelizeDate']>;
  seed?: Maybe<Scalars['String']>;
  startedAt: Scalars['SequelizeDate'];
  status: CrashGameStatus;
  totalBet?: Maybe<Scalars['Float']>;
  totalBetCount?: Maybe<Scalars['Float']>;
  totalPayout?: Maybe<Scalars['Float']>;
  totalUserCount?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['SequelizeDate'];
};


export type CrashGameBetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};

export type CrashGameConnection = {
  __typename?: 'CrashGameConnection';
  edges?: Maybe<Array<Maybe<CrashGameEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type CrashGameEdge = {
  __typename?: 'CrashGameEdge';
  cursor: Scalars['String'];
  node?: Maybe<CrashGame>;
};

export enum CrashGameOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type CrashGameStats = {
  __typename?: 'CrashGameStats';
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  totalBet?: Maybe<Scalars['Float']>;
  totalBetCount?: Maybe<Scalars['Int']>;
  totalPayout?: Maybe<Scalars['Float']>;
  totalUserCount?: Maybe<Scalars['Int']>;
};

export enum CrashGameStatus {
  Created = 'CREATED',
  Finished = 'FINISHED',
  Started = 'STARTED'
}

export type CreateAchievementInput = {
  autoClaim?: InputMaybe<Scalars['Boolean']>;
  description: Scalars['String'];
  enabled: Scalars['Boolean'];
  imageUrl: Scalars['String'];
  limitPerUser?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  rewards: Array<AchievementRewardInput>;
  rewardsExpireAfterSeconds: Scalars['Int'];
  trigger?: InputMaybe<AchievementTriggerInput>;
  type?: InputMaybe<AchievementType>;
};

export type CreateAchievementPayload = {
  __typename?: 'CreateAchievementPayload';
  achievement?: Maybe<Achievement>;
};

export type CreateAffiliatePromoCodeInput = {
  affiliateUserId?: InputMaybe<Scalars['ID']>;
  code: Scalars['String'];
  marketId?: InputMaybe<Scalars['ID']>;
};

export type CreateAffiliatePromoCodePayload = {
  __typename?: 'CreateAffiliatePromoCodePayload';
  promoCode?: Maybe<PromoCode>;
};

export type CreateAffiliateReportsJobPayload = {
  __typename?: 'CreateAffiliateReportsJobPayload';
  status?: Maybe<Scalars['Boolean']>;
};

export type CreateAffiliateTierInput = {
  ancestorAffiliateTierId: Scalars['ID'];
  canClaimItems: Scalars['Boolean'];
  commissionPercentage: Scalars['Float'];
  commissionRequirement?: InputMaybe<Scalars['Float']>;
  crashPercentage: Scalars['Float'];
  depositPercentage: Scalars['Float'];
  depositRequirement: Scalars['Float'];
  dicePercentage: Scalars['Float'];
  inviteCodeLimit: Scalars['Int'];
  loanLimit?: InputMaybe<Scalars['Int']>;
  matchBettingPercentage: Scalars['Float'];
  minimumActiveReferralsClaimRequirement?: InputMaybe<Scalars['Int']>;
  minimumReferralsClaimRequirement?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  plinkoPercentage: Scalars['Float'];
  promoCodeLimit: Scalars['Int'];
  pvpPercentage: Scalars['Float'];
  roulettePercentage: Scalars['Float'];
  stickyReferees: Scalars['Boolean'];
  unboxingPercentage: Scalars['Float'];
};

export type CreateAssetInput = {
  dataUpload?: InputMaybe<Scalars['Upload']>;
  fileName: Scalars['String'];
  folder: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  isPublic: Scalars['Boolean'];
  mimeType: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type CreateBetInput = {
  amount: Scalars['Float'];
  gameId: Scalars['ID'];
  mode?: InputMaybe<BetMode>;
  selection?: InputMaybe<Scalars['Int']>;
  selections?: InputMaybe<Array<Scalars['Int']>>;
};

export type CreateBetPayload = {
  __typename?: 'CreateBetPayload';
  bet: Bet;
};

export type CreateBetSubscriptionPayload = {
  __typename?: 'CreateBetSubscriptionPayload';
  bet: Bet;
};

export type CreateBoxInput = {
  availableFrom?: InputMaybe<Scalars['SequelizeDate']>;
  availableUntil?: InputMaybe<Scalars['SequelizeDate']>;
  backgroundImageUrl?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  discountPrice?: InputMaybe<Scalars['Float']>;
  enabled: Scalars['Boolean'];
  houseEdgePercent?: InputMaybe<Scalars['Float']>;
  iconUrl: Scalars['String'];
  levelRequired?: InputMaybe<Scalars['Int']>;
  marketId?: InputMaybe<Scalars['ID']>;
  maxExpectedValue?: InputMaybe<Scalars['Float']>;
  maxPurchasesDaily?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  openable?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  priceFixed?: InputMaybe<Scalars['Float']>;
  purchasable?: InputMaybe<Scalars['Boolean']>;
  sellable?: InputMaybe<Scalars['Boolean']>;
  slots: Array<InputMaybe<BoxSlotInput>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ticketsRewarded?: InputMaybe<Scalars['Int']>;
  type: BoxType;
  walletRestrictions?: InputMaybe<Array<InputMaybe<WalletType>>>;
};

export type CreateBoxOpeningItemInput = {
  id: Scalars['ID'];
  rate: Scalars['Float'];
};

export type CreateBoxOpeningPayload = {
  __typename?: 'CreateBoxOpeningPayload';
  box?: Maybe<Box>;
  boxOpenings?: Maybe<Array<Maybe<BoxOpening>>>;
};

export type CreateBoxOpeningSubscriptionPayload = {
  __typename?: 'CreateBoxOpeningSubscriptionPayload';
  boxOpening: BoxOpening;
};

export type CreateBoxPayload = {
  __typename?: 'CreateBoxPayload';
  box: Box;
};

export type CreateBoxSubscriptionPayload = {
  __typename?: 'CreateBoxSubscriptionPayload';
  box: Box;
};

export type CreateCalendarEntryInput = {
  calendarId: Scalars['ID'];
  recaptcha: Scalars['String'];
  visualRecaptcha?: InputMaybe<Scalars['String']>;
};

export type CreateCalendarEntryPayload = {
  __typename?: 'CreateCalendarEntryPayload';
  calendarEntry: CalendarEntry;
};

export type CreateCalendarEntrySubscriptionPayload = {
  __typename?: 'CreateCalendarEntrySubscriptionPayload';
  calendarEntry: CalendarEntry;
};

export type CreateCalendarInput = {
  dailyOpenCount?: InputMaybe<Scalars['Int']>;
  endAt: Scalars['SequelizeDate'];
  name: Scalars['String'];
  rewards: Array<CalendarRewardInput>;
  startAt: Scalars['SequelizeDate'];
};

export type CreateCalendarPayload = {
  __typename?: 'CreateCalendarPayload';
  calendar: Calendar;
};

export type CreateCalendarSubscriptionPayload = {
  __typename?: 'CreateCalendarSubscriptionPayload';
  calendar: Calendar;
};

export type CreateCasinoGameInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  casinoGameSelectedProviderId: Scalars['ID'];
  category: CasinoGameCategory;
  description?: InputMaybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  hasFreeSpins?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  isLive?: InputMaybe<Scalars['Boolean']>;
  lines?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  recalledAt?: InputMaybe<Scalars['SequelizeDate']>;
  releasedAt?: InputMaybe<Scalars['SequelizeDate']>;
  selectedFeatureGroup?: InputMaybe<CasinoGameFeatureGroup>;
  slug: Scalars['String'];
  studio?: InputMaybe<CasinoGameProviderCode>;
  title: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type CreateCasinoGameLobbyInput = {
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
  positionedCasinoGameInputs?: InputMaybe<Array<PositionedCasinoGameInput>>;
  slug?: InputMaybe<Scalars['String']>;
};

export type CreateCasinoGameLobbyPayload = {
  __typename?: 'CreateCasinoGameLobbyPayload';
  casinoGameLobby: CasinoGameLobby;
};

export type CreateCasinoGameProviderConfigInput = {
  casinoGameId?: InputMaybe<Scalars['ID']>;
  casinoGameProviderId: Scalars['ID'];
  devices?: InputMaybe<Array<Device>>;
  featureGroup: CasinoGameFeatureGroup;
  identifier: Scalars['String'];
  payout?: InputMaybe<Scalars['Int']>;
  volatilityRating?: InputMaybe<CasinoGameVolatilityRating>;
};

export type CreateCasinoGameProviderInput = {
  enabled: Scalars['Boolean'];
  monthlyFeeBasic: Scalars['Int'];
  monthlyFeeBrand?: InputMaybe<Scalars['Int']>;
  monthlyFeeJackpot?: InputMaybe<Scalars['Int']>;
  monthlyFeePartners?: InputMaybe<Scalars['Int']>;
  monthlyFeePremium?: InputMaybe<Scalars['Int']>;
  monthlyFeeTable?: InputMaybe<Scalars['Int']>;
  provider: CasinoGameProviderCode;
  studio: CasinoGameProviderCode;
  subProvider: CasinoGameProviderCode;
};

export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  itemCategory?: Maybe<ItemCategory>;
};

export type CreateCrashBetInput = {
  amount: Scalars['Float'];
  desiredItemVariantId?: InputMaybe<Scalars['ID']>;
  gameId?: InputMaybe<Scalars['ID']>;
  maxTick?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<CrashBetMode>;
  userItemIds: Array<InputMaybe<Scalars['ID']>>;
};

export type CreateCrashBetPayload = {
  __typename?: 'CreateCrashBetPayload';
  crashBet?: Maybe<CrashBet>;
};

export type CreateCrashBetSubscriptionPayload = {
  __typename?: 'CreateCrashBetSubscriptionPayload';
  crashBet: CrashBet;
};

export type CreateCrashGameSubscriptionPayload = {
  __typename?: 'CreateCrashGameSubscriptionPayload';
  crashGame: CrashGame;
};

export type CreateCronJobInput = {
  appEngineHttpTarget?: InputMaybe<SchedulerAppEngineHttpTargetInput>;
  description: Scalars['String'];
  httpTarget?: InputMaybe<SchedulerHttpTargetInput>;
  name: Scalars['String'];
  pubsubTarget?: InputMaybe<SchedulerPubsubTargetInput>;
  retryConfig?: InputMaybe<SchedulerRetryConfigInput>;
  schedule: Scalars['String'];
  timeZone: Scalars['String'];
};

export type CreateCronJobPayload = {
  __typename?: 'CreateCronJobPayload';
  cronJob?: Maybe<CronJob>;
};

export type CreateCryptoAddressInput = {
  address?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['Boolean']>;
  ignoreExisting?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  paymentOptionId: Scalars['ID'];
  userId?: InputMaybe<Scalars['ID']>;
};

export type CreateDiceBetsInput = {
  amount: Scalars['Float'];
  chance?: InputMaybe<Scalars['Float']>;
  choice: DiceBetChoice;
  desiredItemVariantId?: InputMaybe<Scalars['ID']>;
  mode: DiceBetMode;
  rollsPerClick: Scalars['Int'];
  userItemIds: Array<Scalars['ID']>;
};

export type CreateDiceBetsPayload = {
  __typename?: 'CreateDiceBetsPayload';
  diceBets?: Maybe<Array<Maybe<DiceBet>>>;
};

export type CreateDiceBetsSubscriptionPayload = {
  __typename?: 'CreateDiceBetsSubscriptionPayload';
  diceBets?: Maybe<Array<DiceBet>>;
};

export type CreateDigitalCodePayload = {
  __typename?: 'CreateDigitalCodePayload';
  ids: Array<Scalars['ID']>;
};

export type CreateDigitalCodeSubscriptionPayload = {
  __typename?: 'CreateDigitalCodeSubscriptionPayload';
  digitalCode: DigitalCode;
};

export type CreateDigitalCodesInput = {
  codes: Array<Scalars['String']>;
  itemVariantIds: Array<Scalars['ID']>;
};

export type CreateDocumentInput = {
  type?: InputMaybe<DocumentType>;
  upload?: InputMaybe<Array<Scalars['Upload']>>;
  userId: Scalars['ID'];
};

export type CreateDocumentPayload = {
  __typename?: 'CreateDocumentPayload';
  document?: Maybe<Document>;
};

export type CreateDocumentSubscriptionPayload = {
  __typename?: 'CreateDocumentSubscriptionPayload';
  document: Document;
};

export type CreateEmailInput = {
  message: Scalars['String'];
  title: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
  userIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type CreateEmailPayload = {
  __typename?: 'CreateEmailPayload';
  count?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  emails?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type CreateExchangeInput = {
  itemVariantIds: Array<Scalars['ID']>;
  skipAffiliateBalance?: InputMaybe<Scalars['Boolean']>;
  userItemIds: Array<Scalars['ID']>;
};

export type CreateExchangePayload = {
  __typename?: 'CreateExchangePayload';
  exchange?: Maybe<Exchange>;
};

export type CreateGameJackpotSubscriptionPayload = {
  __typename?: 'CreateGameJackpotSubscriptionPayload';
  gameJackpot: GameJackpot;
};

export type CreateGameMessageInput = {
  body: Scalars['String'];
  gameId: Scalars['ID'];
};

export type CreateGameMessagePayload = {
  __typename?: 'CreateGameMessagePayload';
  gameMessage: GameMessage;
};

export type CreateGameMessageSubscriptionPayload = {
  __typename?: 'CreateGameMessageSubscriptionPayload';
  gameMessage: GameMessage;
};

export type CreateGameSubscriptionPayload = {
  __typename?: 'CreateGameSubscriptionPayload';
  game: Game;
};

export type CreateGemstoneBoostActivationPayload = {
  __typename?: 'CreateGemstoneBoostActivationPayload';
  gemstoneBoostActivation?: Maybe<GemstoneBoostActivation>;
};

export type CreateGemstoneBoostInput = {
  activationPeriod: Scalars['Int'];
  amountMultiplier: Scalars['Float'];
  currency: Scalars['String'];
  endAt: Scalars['SequelizeDate'];
  startAt: Scalars['SequelizeDate'];
  status: GemstoneBoostStatus;
  teamGemstoneThreshold?: InputMaybe<Scalars['Int']>;
  walletType?: InputMaybe<WalletType>;
};

export type CreateGemstoneBoostPayload = {
  __typename?: 'CreateGemstoneBoostPayload';
  gemstoneBoost?: Maybe<GemstoneBoost>;
};

export type CreateGiftCardOptionInput = {
  amount: Scalars['Float'];
  enabled: Scalars['Boolean'];
  externalUrl: Scalars['String'];
  iconUrl: Scalars['String'];
  marketId: Scalars['ID'];
  order?: InputMaybe<Scalars['Int']>;
  provider: GiftCardProvider;
};

export type CreateGiftCardOptionPayload = {
  __typename?: 'CreateGiftCardOptionPayload';
  giftCardOption?: Maybe<GiftCardOption>;
};

export type CreateGiftCardPromoCodesInput = {
  codes: Array<Scalars['String']>;
  giftCardOptionId: Scalars['ID'];
};

export type CreateGiveawayInput = {
  announceAtDates?: InputMaybe<Array<Scalars['SequelizeDate']>>;
  currency: Scalars['String'];
  endAt?: InputMaybe<Scalars['SequelizeDate']>;
  endIn?: InputMaybe<Scalars['Duration']>;
  entryRequirements?: InputMaybe<GiveawayEntryRequirementsInput>;
  name?: InputMaybe<Scalars['String']>;
  rewardAmount: Scalars['Float'];
  secret?: InputMaybe<Scalars['String']>;
  startAt?: InputMaybe<Scalars['SequelizeDate']>;
  startIn?: InputMaybe<Scalars['Duration']>;
  walletType: WalletType;
  winnersAmount: Scalars['Int'];
};

export type CreateGiveawayPayload = {
  __typename?: 'CreateGiveawayPayload';
  giveaway?: Maybe<Giveaway>;
};

export type CreateInviteCodeInput = {
  code: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
};

export type CreateInviteCodePayload = {
  __typename?: 'CreateInviteCodePayload';
  inviteCode: InviteCode;
};

export type CreateItemCategoryInput = {
  defaultExchangeRate: Scalars['Float'];
  defaultMarkup: Scalars['Float'];
  name: Scalars['String'];
  shippingInfo: Scalars['String'];
};

export type CreateItemCategorySubscriptionPayload = {
  __typename?: 'CreateItemCategorySubscriptionPayload';
  itemCategory: ItemCategory;
};

export type CreateItemInput = {
  brand: Scalars['String'];
  categoryId?: InputMaybe<Scalars['ID']>;
  color?: InputMaybe<Scalars['String']>;
  depositable?: InputMaybe<Scalars['Boolean']>;
  description: Scalars['String'];
  displayValue: Scalars['Float'];
  exchangeRate: Scalars['Float'];
  externalId?: InputMaybe<Scalars['String']>;
  externalMedia?: InputMaybe<Array<ItemExternalMediaInput>>;
  iconUrl: Scalars['String'];
  marketId: Scalars['ID'];
  markup: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  obtainable?: InputMaybe<Scalars['Boolean']>;
  purchaseUrl?: InputMaybe<Scalars['String']>;
  rarity?: InputMaybe<Scalars['String']>;
  releasedAt?: InputMaybe<Scalars['SequelizeDate']>;
  shippingCost: Scalars['Float'];
  shippingInfo: Scalars['String'];
  size?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<ItemTagInput>>;
  type?: InputMaybe<ItemType>;
  usable?: InputMaybe<Scalars['Boolean']>;
  value: Scalars['Float'];
  withdrawable?: InputMaybe<Scalars['Boolean']>;
};

export type CreateItemPayload = {
  __typename?: 'CreateItemPayload';
  item?: Maybe<Item>;
};

export type CreateItemSubscriptionPayload = {
  __typename?: 'CreateItemSubscriptionPayload';
  item: Item;
};

export type CreateItemVariantInput = {
  approvalStrategy?: InputMaybe<ItemVariantApprovalStrategy>;
  brand?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['ID']>;
  color?: InputMaybe<Scalars['String']>;
  depositable?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  displayValue: Scalars['Float'];
  exchangeRate: Scalars['Float'];
  externalId?: InputMaybe<Scalars['String']>;
  iconUrl: Scalars['String'];
  itemId: Scalars['ID'];
  markup: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  obtainable?: InputMaybe<Scalars['Boolean']>;
  purchasable?: InputMaybe<ItemPurchasable>;
  purchaseUrl?: InputMaybe<Scalars['String']>;
  rarity?: InputMaybe<Scalars['String']>;
  releasedAt?: InputMaybe<Scalars['SequelizeDate']>;
  /** @deprecated Use retailerId */
  retailer?: InputMaybe<Retailer>;
  retailerId?: InputMaybe<Scalars['ID']>;
  shippingCost: Scalars['Float'];
  shippingInfo?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ItemType>;
  usable?: InputMaybe<Scalars['Boolean']>;
  value: Scalars['Float'];
  withdrawable?: InputMaybe<Scalars['Boolean']>;
};

export type CreateItemVariantPayload = {
  __typename?: 'CreateItemVariantPayload';
  itemVariant?: Maybe<ItemVariant>;
};

export type CreateItemVariantSubscriptionPayload = {
  __typename?: 'CreateItemVariantSubscriptionPayload';
  itemVariant: ItemVariant;
};

export type CreateItemsPayload = {
  __typename?: 'CreateItemsPayload';
  items: Array<Item>;
  total?: Maybe<Scalars['Int']>;
};

export type CreateJackpotInput = {
  chance: Scalars['Float'];
  currency?: InputMaybe<Scalars['String']>;
  gameWageringRequirements: Array<GameWageringRequirementInput>;
  initialValue: Scalars['Int'];
  payoutConfig?: InputMaybe<JackpotPayoutConfigInput>;
  payoutType?: InputMaybe<JackpotPayoutType>;
  scheduledAt?: InputMaybe<Scalars['SequelizeDate']>;
  userRequirements?: InputMaybe<UserRequirementsInput>;
  wager: Scalars['Float'];
  wishlistTicketAmount?: InputMaybe<Array<JackpotWishlistTicketAmountInput>>;
  won?: InputMaybe<Scalars['Boolean']>;
};

export type CreateJackpotPayload = {
  __typename?: 'CreateJackpotPayload';
  jackpot?: Maybe<Jackpot>;
};

export type CreateJackpotSubscriptionPayload = {
  __typename?: 'CreateJackpotSubscriptionPayload';
  jackpot: Jackpot;
};

export type CreateLoanRequestPayload = {
  __typename?: 'CreateLoanRequestPayload';
  affiliateLoanRequest?: Maybe<AffiliateLoanRequest>;
};

export type CreateMarketPayload = {
  __typename?: 'CreateMarketPayload';
  market?: Maybe<Market>;
};

export type CreateMatchBettingGameSubscriptionPayload = {
  __typename?: 'CreateMatchBettingGameSubscriptionPayload';
  matchBettingGame: MatchBettingGame;
};

export type CreateMatchBettingLeagueSubscriptionPayload = {
  __typename?: 'CreateMatchBettingLeagueSubscriptionPayload';
  matchBettingLeague: MatchBettingLeague;
};

export type CreateMatchBettingMarketSubscriptionPayload = {
  __typename?: 'CreateMatchBettingMarketSubscriptionPayload';
  matchBettingMarket: MatchBettingMarket;
};

export type CreateMatchBettingMatchFromProviderPayload = {
  __typename?: 'CreateMatchBettingMatchFromProviderPayload';
  matchBettingMatches: Array<MatchBettingMatch>;
};

export type CreateMatchBettingMatchSubscriptionPayload = {
  __typename?: 'CreateMatchBettingMatchSubscriptionPayload';
  matchBettingMatch: MatchBettingMatch;
};

export type CreateMatchBettingMatchesFromProviderInput = {
  externalIds?: InputMaybe<Array<Scalars['String']>>;
  provider: MatchBettingProvider;
  scheduledAtFrom?: InputMaybe<Scalars['SequelizeDate']>;
  scheduledAtTo?: InputMaybe<Scalars['SequelizeDate']>;
};

export type CreateMatchBettingPlayerSubscriptionPayload = {
  __typename?: 'CreateMatchBettingPlayerSubscriptionPayload';
  matchBettingPlayer: MatchBettingPlayer;
};

export type CreateMatchBettingSerieSubscriptionPayload = {
  __typename?: 'CreateMatchBettingSerieSubscriptionPayload';
  matchBettingSerie: MatchBettingSerie;
};

export type CreateMatchBettingSlipInput = {
  amount: Scalars['Float'];
  finalOdds: Scalars['Float'];
  payoutType: MatchBettingSlipPayoutType;
  selections: Array<MatchBettingSlipSelectionInput>;
  type: MatchBettingSlipType;
  userItemIds: Array<Scalars['ID']>;
};

export type CreateMatchBettingSlipPayload = {
  __typename?: 'CreateMatchBettingSlipPayload';
  matchBettingSlip: MatchBettingSlip;
};

export type CreateMatchBettingSlipSubscriptionPayload = {
  __typename?: 'CreateMatchBettingSlipSubscriptionPayload';
  matchBettingSlip: MatchBettingSlip;
};

export type CreateMatchBettingTeamSubscriptionPayload = {
  __typename?: 'CreateMatchBettingTeamSubscriptionPayload';
  matchBettingTeam: MatchBettingTeam;
};

export type CreateMatchBettingTournamentSubscriptionPayload = {
  __typename?: 'CreateMatchBettingTournamentSubscriptionPayload';
  matchBettingTournament: MatchBettingTournament;
};

export type CreateMessageInput = {
  body: Scalars['String'];
  channel: MessageChannel;
};

export type CreateMessagePayload = {
  __typename?: 'CreateMessagePayload';
  message?: Maybe<Message>;
};

export type CreateMessageSubscriptionPayload = {
  __typename?: 'CreateMessageSubscriptionPayload';
  message: Message;
};

export type CreateNoteInput = {
  body: Scalars['String'];
  userId: Scalars['ID'];
};

export type CreateNotePayload = {
  __typename?: 'CreateNotePayload';
  note?: Maybe<Note>;
};

export type CreateNotificationMessageInput = {
  content: Scalars['String'];
  notificationId: Scalars['ID'];
};

export type CreateNotificationMessagePayload = {
  __typename?: 'CreateNotificationMessagePayload';
  notificationMessage: NotificationMessage;
};

export type CreateNotificationMessageSubscriptionPayload = {
  __typename?: 'CreateNotificationMessageSubscriptionPayload';
  notificationMessage: NotificationMessage;
};

export type CreateNotificationSubscriptionPayload = {
  __typename?: 'CreateNotificationSubscriptionPayload';
  notification: Notification;
};

export type CreateOrderInput = {
  cost: Scalars['Float'];
  deliveryCost: Scalars['Float'];
  estimatedDeliveryInDays?: InputMaybe<Scalars['String']>;
  screenshotUrl?: InputMaybe<Scalars['String']>;
  secret?: InputMaybe<Scalars['String']>;
  trackingUrl?: InputMaybe<Scalars['String']>;
  userItemIds: Array<InputMaybe<Scalars['ID']>>;
};

export type CreateOrderNoteInput = {
  body: Scalars['String'];
  orderId: Scalars['ID'];
  private?: InputMaybe<Scalars['Boolean']>;
};

export type CreateOrderNotePayload = {
  __typename?: 'CreateOrderNotePayload';
  orderNote?: Maybe<OrderNote>;
};

export type CreateOrderPayload = {
  __typename?: 'CreateOrderPayload';
  order?: Maybe<Order>;
};

export type CreateOrderSubscriptionPayload = {
  __typename?: 'CreateOrderSubscriptionPayload';
  order: Order;
};

export type CreatePaymentOptionInput = {
  action: PaymentOptionAction;
  approximateAmount: Scalars['Boolean'];
  bonusMaxAmount?: InputMaybe<Scalars['Float']>;
  bonusPercent: Scalars['Float'];
  canRefund: Scalars['Boolean'];
  confirmationsRequired?: InputMaybe<Scalars['Int']>;
  enabled: Scalars['Boolean'];
  extraProcessingIfRiskScoreAtLeast?: InputMaybe<Scalars['Float']>;
  fixedFee: Scalars['Float'];
  fraudCheckAfter: Scalars['Boolean'];
  fraudCheckBefore: Scalars['Boolean'];
  iconUrl: Scalars['String'];
  maxAmount: Scalars['Float'];
  method?: InputMaybe<PaymentMethod>;
  methodName?: InputMaybe<Scalars['String']>;
  minAmount: Scalars['Float'];
  order: Scalars['Int'];
  percentageFee: Scalars['Float'];
  provider: PaymentProvider;
  providerConfig?: InputMaybe<PaymentOptionProviderConfigInput>;
  providerName: Scalars['String'];
  requiresEmail?: InputMaybe<Scalars['Boolean']>;
  requiresProfile: Scalars['Boolean'];
  totalMaxAmount?: InputMaybe<Scalars['Float']>;
  totalMaxAmountDuration?: InputMaybe<Scalars['Duration']>;
  transactionType: PaymentOptionTransactionType;
  type: Scalars['String'];
  visible: Scalars['Boolean'];
  whitelistedCountries: Array<Scalars['String']>;
};

export type CreatePaymentOptionPayload = {
  __typename?: 'CreatePaymentOptionPayload';
  paymentOption?: Maybe<PaymentOption>;
};

export type CreatePlinkoBetInput = {
  amount: Scalars['Float'];
  feVersion?: InputMaybe<Scalars['Float']>;
  payoutType: PlinkoBetPayoutType;
  pins: Scalars['Int'];
  riskMode: PlinkoBetRiskMode;
  userItemIds: Array<Scalars['ID']>;
};

export type CreatePlinkoBetPayload = {
  __typename?: 'CreatePlinkoBetPayload';
  plinkoBet?: Maybe<PlinkoBet>;
};

export type CreatePlinkoBetSubscriptionPayload = {
  __typename?: 'CreatePlinkoBetSubscriptionPayload';
  plinkoBet: PlinkoBet;
};

export type CreatePlinkoBetsInput = {
  amount: Scalars['Float'];
  feVersion?: InputMaybe<Scalars['Float']>;
  numberOfBets: Scalars['Int'];
  payoutType: PlinkoBetPayoutType;
  pins: Scalars['Int'];
  riskMode: PlinkoBetRiskMode;
  userItemIds: Array<Scalars['ID']>;
};

export type CreatePlinkoBetsPayload = {
  __typename?: 'CreatePlinkoBetsPayload';
  plinkoBets?: Maybe<Array<Maybe<PlinkoBet>>>;
};

export type CreatePollInput = {
  correctAnswer: Scalars['Boolean'];
  description: Scalars['String'];
  endAt?: InputMaybe<Scalars['SequelizeDate']>;
  endIn?: InputMaybe<Scalars['Duration']>;
  maxOptionsToSelect?: InputMaybe<Scalars['Int']>;
  minOptionsToSelect?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  options: Array<CreatePollInputPollOptionInput>;
  startAt?: InputMaybe<Scalars['SequelizeDate']>;
  startIn?: InputMaybe<Scalars['Duration']>;
  userRequirements?: InputMaybe<PollUserRequirementsInput>;
};

export type CreatePollInputPollOptionInput = {
  name: Scalars['String'];
};

export type CreatePollPayload = {
  __typename?: 'CreatePollPayload';
  poll?: Maybe<Poll>;
  pollOptions?: Maybe<Array<PollOption>>;
};

export type CreatePromoCodeInput = {
  affiliateUserId?: InputMaybe<Scalars['ID']>;
  amount: Scalars['Int'];
  balance: Scalars['Float'];
  boxId?: InputMaybe<Scalars['ID']>;
  codes: Array<Scalars['String']>;
  itemVariantId?: InputMaybe<Scalars['ID']>;
  marketId: Scalars['ID'];
  maxBalance: Scalars['Float'];
  maxRedeemCount?: InputMaybe<Scalars['Int']>;
  minDepositRequirement?: InputMaybe<Scalars['Float']>;
  percentageReward: Scalars['Float'];
  type: PromoCodeType;
  walletType?: InputMaybe<WalletType>;
};

export type CreatePromoCodeSubscriptionPayload = {
  __typename?: 'CreatePromoCodeSubscriptionPayload';
  promoCode: PromoCode;
};

export type CreatePromoCodesPayload = {
  __typename?: 'CreatePromoCodesPayload';
  affiliateUser?: Maybe<User>;
  affiliateUserId?: Maybe<Scalars['ID']>;
  amount: Scalars['Int'];
  balance: Scalars['Float'];
  box?: Maybe<Box>;
  boxId?: Maybe<Scalars['ID']>;
  codes?: Maybe<Array<Scalars['String']>>;
  itemVariant?: Maybe<ItemVariant>;
  itemVariantId?: Maybe<Scalars['ID']>;
  marketId: Scalars['ID'];
  maxBalance?: Maybe<Scalars['Float']>;
  maxRedeemCount?: Maybe<Scalars['Int']>;
  minDepositRequirement?: Maybe<Scalars['Float']>;
  percentageReward?: Maybe<Scalars['Float']>;
  type: PromoCodeType;
  walletType?: Maybe<WalletType>;
};

export type CreateProxyInput = {
  uri: Scalars['Url'];
};

export type CreateProxyPayload = {
  __typename?: 'CreateProxyPayload';
  proxy: Proxy;
};

export type CreatePvpBetSubscriptionPayload = {
  __typename?: 'CreatePvpBetSubscriptionPayload';
  pvpBet: PvpBet;
};

export type CreatePvpBotInput = {
  alertOnReserveUse?: InputMaybe<Scalars['Boolean']>;
  displayName: Scalars['String'];
  marketId: Scalars['ID'];
  maxBetAmount: Scalars['Float'];
  minBetAmount: Scalars['Float'];
  remainingReserveUses: Scalars['Int'];
  reserveBalance: Scalars['Float'];
  status: PvpBotStatus;
};

export type CreatePvpBotPayload = {
  __typename?: 'CreatePvpBotPayload';
  pvpBot: PvpBot;
};

export type CreatePvpBotSubscriptionPayload = {
  __typename?: 'CreatePvpBotSubscriptionPayload';
  pvpBot: PvpBot;
};

export type CreatePvpGameInput = {
  amount: Scalars['Float'];
  autoJoinBots?: InputMaybe<Scalars['Boolean']>;
  boxes?: InputMaybe<Array<PvpGameBoxInput>>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  mode?: InputMaybe<PvpGameMode>;
  multiplierMode?: InputMaybe<PvpGameMultiplierMode>;
  numberOfPlayers?: InputMaybe<Scalars['Int']>;
  numberOfPlayersInTeam?: InputMaybe<Scalars['Int']>;
  numberOfTeams?: InputMaybe<Scalars['Int']>;
  selection?: InputMaybe<Scalars['Int']>;
  strategy?: InputMaybe<PvpGameStrategy>;
  teamSelection?: InputMaybe<Scalars['Int']>;
  type: PvpGameType;
  userItemIds: Array<Scalars['ID']>;
};

export type CreatePvpGameMessageInput = {
  body: Scalars['String'];
  pvpGameId: Scalars['ID'];
};

export type CreatePvpGameMessagePayload = {
  __typename?: 'CreatePvpGameMessagePayload';
  pvpGameMessage: PvpGameMessage;
};

export type CreatePvpGameMessageSubscriptionPayload = {
  __typename?: 'CreatePvpGameMessageSubscriptionPayload';
  pvpGameMessage: PvpGameMessage;
};

export type CreatePvpGamePayload = {
  __typename?: 'CreatePvpGamePayload';
  pvpBet?: Maybe<PvpBet>;
  pvpBets?: Maybe<Array<PvpBet>>;
  pvpGame: PvpGame;
  pvpRound?: Maybe<PvpRound>;
  pvpRounds?: Maybe<Array<PvpRound>>;
};

export type CreatePvpGameSubscriptionPayload = {
  __typename?: 'CreatePvpGameSubscriptionPayload';
  pvpGame: PvpGame;
};

export type CreatePvpRoundInput = {
  doubleBetAmount: Scalars['Boolean'];
  pvpGameId: Scalars['ID'];
  selection?: InputMaybe<Scalars['Int']>;
};

export type CreatePvpRoundPayload = {
  __typename?: 'CreatePvpRoundPayload';
  pvpBet: PvpBet;
  pvpGame: PvpGame;
  pvpRound: PvpRound;
};

export type CreatePvpRoundSubscriptionPayload = {
  __typename?: 'CreatePvpRoundSubscriptionPayload';
  pvpRound: PvpRound;
};

export type CreateRankUpGameInput = {
  destinationTierRank: Scalars['Int'];
  rakebackBet: Scalars['Float'];
};

export type CreateRetailerInput = {
  code: Scalars['String'];
  name: Scalars['String'];
};

export type CreateRollSubscriptionPayload = {
  __typename?: 'CreateRollSubscriptionPayload';
  roll: Roll;
};

export type CreateSocialStoryInput = {
  position?: InputMaybe<Scalars['Int']>;
  url?: InputMaybe<Scalars['String']>;
};

export type CreateSocialStoryPayload = {
  __typename?: 'CreateSocialStoryPayload';
  socialStory: SocialStory;
};

export type CreateSteamAssetSubscriptionPayload = {
  __typename?: 'CreateSteamAssetSubscriptionPayload';
  steamAsset: SteamAsset;
};

export type CreateSteamBotPayload = {
  __typename?: 'CreateSteamBotPayload';
  steamBot?: Maybe<SteamBot>;
};

export type CreateSteamBotSubscriptionPayload = {
  __typename?: 'CreateSteamBotSubscriptionPayload';
  steamBot: SteamBot;
};

export type CreateSteamBotsPayload = {
  __typename?: 'CreateSteamBotsPayload';
  steamBots: Array<SteamBot>;
  total?: Maybe<Scalars['Int']>;
};

export type CreateSteamOfferSubscriptionPayload = {
  __typename?: 'CreateSteamOfferSubscriptionPayload';
  steamOffer: SteamOffer;
};

export type CreateSteamOffersInput = {
  steamAssetIds?: InputMaybe<Array<Scalars['ID']>>;
  steamTradeUrl?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type CreateSteamOffersPayload = {
  __typename?: 'CreateSteamOffersPayload';
  steamOffers?: Maybe<Array<Maybe<SteamOffer>>>;
};

export type CreateSupportTicketInput = {
  email: Scalars['String'];
  supportMessage: Scalars['String'];
};

export type CreateSupportTicketPayload = {
  __typename?: 'CreateSupportTicketPayload';
  message: Scalars['String'];
  status: Scalars['String'];
};

export type CreateTagInput = {
  name: Scalars['String'];
  position?: InputMaybe<Scalars['Int']>;
  visible: Scalars['Boolean'];
};

export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  tag?: Maybe<Tag>;
};

export type CreateTagSubscriptionPayload = {
  __typename?: 'CreateTagSubscriptionPayload';
  tag: Tag;
};

export type CreateTicketSubscriptionPayload = {
  __typename?: 'CreateTicketSubscriptionPayload';
  ticket: Ticket;
};

export type CreateTicketsInput = {
  amountOfTicketsToGive?: InputMaybe<Scalars['Int']>;
  jackpotId: Scalars['ID'];
  secret: Scalars['String'];
  userId: Scalars['ID'];
};

export type CreateTicketsPayload = {
  __typename?: 'CreateTicketsPayload';
  tickets: Array<Ticket>;
};

export type CreateTileSettingInput = {
  claimableTiles: Scalars['Int'];
  levelRequired: Scalars['Int'];
  marketId?: InputMaybe<Scalars['ID']>;
  minRewardPerTile: Scalars['Float'];
};

export type CreateTradeInput = {
  promoCode?: InputMaybe<Scalars['String']>;
  recaptcha: Scalars['String'];
  tradeItems: Array<TradeItemInput>;
  visualRecaptcha?: InputMaybe<Scalars['String']>;
};

export type CreateTradePayload = {
  __typename?: 'CreateTradePayload';
  trade: Trade;
};

export type CreateTradeSubscriptionPayload = {
  __typename?: 'CreateTradeSubscriptionPayload';
  trade: Trade;
};

export type CreateTradesInput = {
  promoCode?: InputMaybe<Scalars['String']>;
  recaptcha: Scalars['String'];
  tradeItemsList: Array<Array<TradeItemInput>>;
  visualRecaptcha?: InputMaybe<Scalars['String']>;
};

export type CreateTradesPayload = {
  __typename?: 'CreateTradesPayload';
  trades: Array<Maybe<Trade>>;
};

export type CreateTransactionInput = {
  amount: Scalars['Float'];
  cryptoAddress?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<PaymentMethod>;
  paymentOptionId: Scalars['ID'];
  preferredCurrency?: InputMaybe<Scalars['String']>;
  promoCode?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<PaymentProvider>;
  recaptcha?: InputMaybe<Scalars['String']>;
  seonSession?: InputMaybe<Scalars['String']>;
  sourceCurrency?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  twoFactorToken?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TransactionType>;
  userBoxIds?: InputMaybe<Array<Scalars['ID']>>;
  userItemIds?: InputMaybe<Array<Scalars['ID']>>;
  visualRecaptcha?: InputMaybe<Scalars['String']>;
};

export type CreateTransactionPayload = {
  __typename?: 'CreateTransactionPayload';
  transaction?: Maybe<Transaction>;
};

export type CreateTransactionSubscriptionPayload = {
  __typename?: 'CreateTransactionSubscriptionPayload';
  transaction: Transaction;
};

export type CreateTriggerInput = {
  createGiveawayInput?: InputMaybe<CreateGiveawayInput>;
  currency: Scalars['String'];
  endAt?: InputMaybe<Scalars['SequelizeDate']>;
  gameTypes?: InputMaybe<Array<GameType>>;
  minValue?: InputMaybe<Scalars['Float']>;
  startAt?: InputMaybe<Scalars['SequelizeDate']>;
  triggerValue: Scalars['Float'];
  valueType?: InputMaybe<TriggerValueType>;
};

export type CreateTriggerPayload = {
  __typename?: 'CreateTriggerPayload';
  trigger?: Maybe<Trigger>;
};

export type CreateUpdateMarketInput = {
  countries: Array<InputMaybe<Scalars['String']>>;
  currency: Scalars['String'];
  latestTosVersion?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  shippableCountries?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug: Scalars['String'];
};

export type CreateUpdateSteamBotInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  banned?: InputMaybe<Scalars['Boolean']>;
  deposit?: InputMaybe<Scalars['Boolean']>;
  displayName: Scalars['String'];
  enabled?: InputMaybe<Scalars['Boolean']>;
  httpProxy?: InputMaybe<Scalars['String']>;
  httpsProxy?: InputMaybe<Scalars['String']>;
  maxAcceptableTradeValue?: InputMaybe<Scalars['Float']>;
  maxStockCount?: InputMaybe<Scalars['Int']>;
  maxStockValue?: InputMaybe<Scalars['Float']>;
  minAcceptableTradeValue?: InputMaybe<Scalars['Float']>;
  steamAccountIdentitySecret?: InputMaybe<Scalars['String']>;
  steamAccountLoginKey?: InputMaybe<Scalars['String']>;
  steamAccountPassword?: InputMaybe<Scalars['String']>;
  steamAccountSharedSecret?: InputMaybe<Scalars['String']>;
  steamGame?: InputMaybe<Scalars['Int']>;
  steamId: Scalars['String'];
  steamTradeUrl?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<SteamBotType>;
  username: Scalars['String'];
  withdraw?: InputMaybe<Scalars['Boolean']>;
};

export type CreateUserAchievementInput = {
  achievementId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type CreateUserAchievementPayload = {
  __typename?: 'CreateUserAchievementPayload';
  userAchievement: UserAchievement;
};

export type CreateUserAchievementSubscriptionPayload = {
  __typename?: 'CreateUserAchievementSubscriptionPayload';
  userAchievement: UserAchievement;
};

export type CreateUserAddressInput = {
  address1: Scalars['String'];
  address2?: InputMaybe<Scalars['String']>;
  alias?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  default?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
  region: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
};

export type CreateUserAssetSubscriptionPayload = {
  __typename?: 'CreateUserAssetSubscriptionPayload';
  userAsset: UserAsset;
};

export type CreateUserBoxSubscriptionPayload = {
  __typename?: 'CreateUserBoxSubscriptionPayload';
  userBox: UserBox;
};

export type CreateUserCommunicationInput = {
  mutedUserId: Scalars['ID'];
};

export type CreateUserCommunicationPayload = {
  __typename?: 'CreateUserCommunicationPayload';
  userCommunication: UserCommunication;
};

export type CreateUserCommunicationSubscriptionPayload = {
  __typename?: 'CreateUserCommunicationSubscriptionPayload';
  userCommunication: UserCommunication;
};

export type CreateUserGiveawayPayload = {
  __typename?: 'CreateUserGiveawayPayload';
  userGiveaway?: Maybe<UserGiveaway>;
};

export type CreateUserItemSubscriptionPayload = {
  __typename?: 'CreateUserItemSubscriptionPayload';
  source?: Maybe<UserItemSource>;
  userItem: UserItem;
};

export type CreateUserPollOptionsPayload = {
  __typename?: 'CreateUserPollOptionsPayload';
  userPollOptions?: Maybe<Array<UserPollOption>>;
};

export type CreateUserSubscriptionPayload = {
  __typename?: 'CreateUserSubscriptionPayload';
  user: User;
};

export type CreateUserTierAssetInput = {
  assetId: Scalars['ID'];
  enabled?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  rakebackPrice: Scalars['Float'];
  rank?: InputMaybe<Scalars['Int']>;
};

export type CreateUserTierAssetSubscriptionPayload = {
  __typename?: 'CreateUserTierAssetSubscriptionPayload';
  userTierAsset: UserTierAsset;
};

export type CreateWaxPeerTradeInput = {
  float?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  itemVariantId: Scalars['ID'];
  recaptcha: Scalars['String'];
  value: Scalars['Float'];
  visualRecaptcha?: InputMaybe<Scalars['String']>;
  waxPeerItemId?: InputMaybe<Scalars['ID']>;
};

export type CreateWaxPeerTradePayload = {
  __typename?: 'CreateWaxPeerTradePayload';
  waxPeerTrade: WaxPeerTrade;
};

export type CreateWaxPeerTradeSubscriptionPayload = {
  __typename?: 'CreateWaxPeerTradeSubscriptionPayload';
  waxPeerTrade: WaxPeerTrade;
};

export type CreateWishlistInput = {
  itemVariantIds: Array<Scalars['ID']>;
  jackpotId?: InputMaybe<Scalars['ID']>;
};

export type CreateWishlistPayload = {
  __typename?: 'CreateWishlistPayload';
  wishlist?: Maybe<Wishlist>;
};

export type CreateWithdrawalHistory = {
  __typename?: 'CreateWithdrawalHistory';
  count?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['Float']>;
};

export type CreateWithdrawalRequestInput = {
  amount: Scalars['Float'];
};

export type CreateWithdrawalRequestPayload = {
  __typename?: 'CreateWithdrawalRequestPayload';
  withdrawalRequest: WithdrawalRequest;
};

export type CreateWithdrawalRequestSubscriptionPayload = {
  __typename?: 'CreateWithdrawalRequestSubscriptionPayload';
  withdrawalRequest: WithdrawalRequest;
};

export type CreateZbtTradeInput = {
  float?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  itemVariantId: Scalars['ID'];
  recaptcha: Scalars['String'];
  steamAppName: SteamAppName;
  value: Scalars['Float'];
  visualRecaptcha?: InputMaybe<Scalars['String']>;
};

export type CreateZbtTradePayload = {
  __typename?: 'CreateZbtTradePayload';
  zbtTrade: ZbtTrade;
};

export type CreateZbtTradeSubscriptionPayload = {
  __typename?: 'CreateZbtTradeSubscriptionPayload';
  zbtTrade: ZbtTrade;
};

export type CreateZincOrderInput = {
  discount?: InputMaybe<Scalars['Int']>;
  giftMessage: Scalars['String'];
  maxOrderCost: Scalars['Float'];
  maxShippingCost: Scalars['Float'];
  maxShippingDays: Scalars['Float'];
  primeOptout?: InputMaybe<Scalars['Boolean']>;
  priorityBid?: InputMaybe<Scalars['Int']>;
  shippingPriority: ShippingPriority;
  userItemIds: Array<Scalars['ID']>;
};

export type CreateZincOrderPayload = {
  __typename?: 'CreateZincOrderPayload';
  zincOrder?: Maybe<ZincOrder>;
};

export type CreateZincOrderSubscriptionPayload = {
  __typename?: 'CreateZincOrderSubscriptionPayload';
  zincOrder: ZincOrder;
};

export type CronJob = Node & {
  __typename?: 'CronJob';
  appEngineHttpTarget?: Maybe<Scalars['JSON']>;
  attemptDeadline?: Maybe<Scalars['SequelizeDate']>;
  createdAt: Scalars['SequelizeDate'];
  description: Scalars['String'];
  httpTarget?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  lastAttemptTime?: Maybe<Scalars['SequelizeDate']>;
  name: Scalars['String'];
  pubsubTarget?: Maybe<Scalars['JSON']>;
  retryConfig?: Maybe<Scalars['JSON']>;
  schedule: Scalars['String'];
  scheduleTime?: Maybe<Scalars['SequelizeDate']>;
  state: SchedulerState;
  status?: Maybe<Scalars['JSON']>;
  timeZone: Scalars['String'];
  updatedAt: Scalars['SequelizeDate'];
  userUpdateTime?: Maybe<Scalars['SequelizeDate']>;
};

export type CronJobConnection = {
  __typename?: 'CronJobConnection';
  edges?: Maybe<Array<Maybe<CronJobEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type CronJobEdge = {
  __typename?: 'CronJobEdge';
  cursor: Scalars['String'];
  node?: Maybe<CronJob>;
};

export enum CronJobOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type CryptoAddress = {
  __typename?: 'CryptoAddress';
  address: Scalars['String'];
  createdAt: Scalars['SequelizeDate'];
  default: Scalars['Boolean'];
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  paymentOption: PaymentOption;
  paymentOptionId: Scalars['ID'];
  type?: Maybe<CryptoAddressType>;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
};

export type CryptoAddressConnection = {
  __typename?: 'CryptoAddressConnection';
  edges?: Maybe<Array<Maybe<CryptoAddressEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type CryptoAddressEdge = {
  __typename?: 'CryptoAddressEdge';
  cursor: Scalars['String'];
  node?: Maybe<CryptoAddress>;
};

export enum CryptoAddressOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type CryptoAddressPayload = {
  __typename?: 'CryptoAddressPayload';
  cryptoAddress: CryptoAddress;
};

export enum CryptoAddressType {
  Deposit = 'DEPOSIT',
  Withdrawal = 'WITHDRAWAL'
}

export type Currency = {
  __typename?: 'Currency';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  plural?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

export type DailyWithdrawalRemainder = {
  __typename?: 'DailyWithdrawalRemainder';
  amount: Scalars['Float'];
  canRequest: Scalars['Boolean'];
  hasPendingRequest: Scalars['Boolean'];
  isRestricted: Scalars['Boolean'];
};

export type Dashboard = {
  __typename?: 'Dashboard';
  boxOpenings?: Maybe<BoxOpeningStats>;
  casinoGameActions?: Maybe<CasinoGameStats>;
  crashGames?: Maybe<CrashGameStats>;
  diceBets?: Maybe<DiceBetStats>;
  exchanges?: Maybe<ExchangeStats>;
  gameJackpots?: Maybe<GameJackpotStats>;
  games?: Maybe<GameStats>;
  giveaways?: Maybe<GiveawayStats>;
  jackpotWinningTickets?: Maybe<JackpotWinningTicketsStats>;
  matchBettingSlips?: Maybe<MatchBettingSlipStats>;
  orders?: Maybe<OrderStats>;
  plinkoBets?: Maybe<PlinkoBetStats>;
  promoRedemptions?: Maybe<PromoCodeRedemptionStats>;
  pvpBotGames?: Maybe<PvpGameStats>;
  pvpGames?: Maybe<PvpGameStats>;
  registrations?: Maybe<Scalars['Float']>;
  totalWalletValue: WalletStats;
  trades?: Maybe<TradeStats>;
  transactions?: Maybe<TransactionStats>;
  transactionsExpanded?: Maybe<Array<TransactionsExpandedStatProvider>>;
  userItems?: Maybe<UserItemStats>;
  userProgressChanges: Array<UserProgressChangeStats>;
  walletChanges: Array<WalletChangeStats>;
  waxPeerTrades?: Maybe<WaxPeerTradeStats>;
  zbtTrades?: Maybe<ZbtTradeStats>;
};


export type DashboardBoxOpeningsArgs = {
  currency?: InputMaybe<Scalars['String']>;
  hasPvpGame?: InputMaybe<Scalars['Boolean']>;
  includeExcluded?: InputMaybe<Scalars['Boolean']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  maxLevel?: InputMaybe<Scalars['Int']>;
  maxValue?: InputMaybe<Scalars['Float']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  minLevel?: InputMaybe<Scalars['Int']>;
  minValue?: InputMaybe<Scalars['Float']>;
  slotTypes?: InputMaybe<Array<BoxSlotType>>;
  type?: InputMaybe<BoxType>;
  walletType?: InputMaybe<Array<WalletType>>;
};


export type DashboardCasinoGameActionsArgs = {
  currency?: InputMaybe<Scalars['String']>;
  includeExcluded?: InputMaybe<Scalars['Boolean']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type DashboardCrashGamesArgs = {
  currency?: InputMaybe<Scalars['String']>;
  includeExcluded?: InputMaybe<Scalars['Boolean']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type DashboardDiceBetsArgs = {
  currency?: InputMaybe<Scalars['String']>;
  gameTypes?: InputMaybe<Array<DiceGameType>>;
  includeExcluded?: InputMaybe<Scalars['Boolean']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type DashboardExchangesArgs = {
  currency?: InputMaybe<Scalars['String']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type DashboardGameJackpotsArgs = {
  currency?: InputMaybe<Scalars['String']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type DashboardGamesArgs = {
  currency?: InputMaybe<Scalars['String']>;
  includeExcluded?: InputMaybe<Scalars['Boolean']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type DashboardGiveawaysArgs = {
  currency?: InputMaybe<Scalars['String']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  walletType?: InputMaybe<Array<WalletType>>;
};


export type DashboardJackpotWinningTicketsArgs = {
  currency?: InputMaybe<Scalars['String']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type DashboardMatchBettingSlipsArgs = {
  currency?: InputMaybe<Scalars['String']>;
  includeExcluded?: InputMaybe<Scalars['Boolean']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type DashboardOrdersArgs = {
  creatorId?: InputMaybe<Scalars['ID']>;
  currency?: InputMaybe<Scalars['String']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  retailer?: InputMaybe<Retailer>;
  retailerId?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type DashboardPlinkoBetsArgs = {
  currency?: InputMaybe<Scalars['String']>;
  includeExcluded?: InputMaybe<Scalars['Boolean']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type DashboardPromoRedemptionsArgs = {
  currency?: InputMaybe<Scalars['String']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  type?: InputMaybe<PromoCodeType>;
};


export type DashboardPvpBotGamesArgs = {
  currency?: InputMaybe<Scalars['String']>;
  includeExcluded?: InputMaybe<Scalars['Boolean']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  multiplierModes?: InputMaybe<Array<PvpGameMultiplierMode>>;
  types?: InputMaybe<Array<PvpGameType>>;
};


export type DashboardPvpGamesArgs = {
  currency?: InputMaybe<Scalars['String']>;
  includeExcluded?: InputMaybe<Scalars['Boolean']>;
  isMultiplierBoxGame?: InputMaybe<Scalars['Boolean']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  multiplierModes?: InputMaybe<Array<PvpGameMultiplierMode>>;
  types?: InputMaybe<Array<PvpGameType>>;
};


export type DashboardRegistrationsArgs = {
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type DashboardTotalWalletValueArgs = {
  currency?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<WalletType>;
};


export type DashboardTradesArgs = {
  bySupplier?: InputMaybe<Scalars['Boolean']>;
  createdAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  createdAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  currency?: InputMaybe<Scalars['String']>;
  deposits?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Array<TradeStatus>>;
  updatedAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  updatedAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type DashboardTransactionsArgs = {
  currency?: InputMaybe<Scalars['String']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  status?: InputMaybe<TransactionStatus>;
  type?: InputMaybe<TransactionType>;
};


export type DashboardTransactionsExpandedArgs = {
  currency?: InputMaybe<Scalars['String']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  status?: InputMaybe<TransactionStatus>;
  type?: InputMaybe<TransactionType>;
};


export type DashboardUserItemsArgs = {
  createdAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  createdAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  creatorId?: InputMaybe<Scalars['ID']>;
  currency?: InputMaybe<Scalars['String']>;
  requestedAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  requestedAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  retailer?: InputMaybe<Retailer>;
  retailerId?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<Array<UserItemStatus>>;
  updatedAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  updatedAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type DashboardUserProgressChangesArgs = {
  excludeStaff?: InputMaybe<Scalars['Boolean']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  source?: InputMaybe<Array<InputMaybe<UserProgressSource>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type DashboardWalletChangesArgs = {
  currency?: InputMaybe<Scalars['String']>;
  excludeStaff?: InputMaybe<Scalars['Boolean']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  type?: InputMaybe<Array<InputMaybe<WalletChangeType>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type DashboardWaxPeerTradesArgs = {
  createdAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  createdAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  currency?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Array<WaxPeerTradeStatus>>;
  updatedAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  updatedAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type DashboardZbtTradesArgs = {
  createdAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  createdAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  currency?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Array<ZbtTradeStatus>>;
  updatedAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  updatedAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type DeleteAchievementPayload = {
  __typename?: 'DeleteAchievementPayload';
  achievement?: Maybe<Achievement>;
};

export type DeleteAffiliateTierInput = {
  affiliateTierId: Scalars['ID'];
};

export type DeleteCalendarInput = {
  id: Scalars['ID'];
};

export type DeleteCalendarPayload = {
  __typename?: 'DeleteCalendarPayload';
  calendar: Calendar;
};

export type DeleteCalendarSubscriptionPayload = {
  __typename?: 'DeleteCalendarSubscriptionPayload';
  calendar: Calendar;
};

export type DeleteCronJobInput = {
  name: Scalars['String'];
};

export type DeleteCronJobPayload = {
  __typename?: 'DeleteCronJobPayload';
  cronJob?: Maybe<CronJob>;
};

export type DeleteCryptoAddressInput = {
  cryptoAddressId: Scalars['ID'];
};

export type DeleteDigitalCodePayload = {
  __typename?: 'DeleteDigitalCodePayload';
  digitalCode: DigitalCode;
};

export type DeleteDigitalCodeSubscriptionPayload = {
  __typename?: 'DeleteDigitalCodeSubscriptionPayload';
  digitalCode: DigitalCode;
};

export type DeleteDocumentInput = {
  id: Scalars['ID'];
};

export type DeleteDocumentPayload = {
  __typename?: 'DeleteDocumentPayload';
  document?: Maybe<Document>;
};

export type DeleteDocumentSubscriptionPayload = {
  __typename?: 'DeleteDocumentSubscriptionPayload';
  document: Document;
};

export type DeleteItemCategoryInput = {
  id: Scalars['ID'];
};

export type DeleteItemCategorySubscriptionPayload = {
  __typename?: 'DeleteItemCategorySubscriptionPayload';
  itemCategory: ItemCategory;
};

export type DeleteItemVariantInput = {
  id: Scalars['ID'];
};

export type DeleteItemVariantPayload = {
  __typename?: 'DeleteItemVariantPayload';
  itemVariant?: Maybe<ItemVariant>;
};

export type DeleteItemVariantSubscriptionPayload = {
  __typename?: 'DeleteItemVariantSubscriptionPayload';
  itemVariant: ItemVariant;
};

export type DeleteMarketPayload = {
  __typename?: 'DeleteMarketPayload';
  market?: Maybe<Market>;
};

export type DeleteMessageSubscriptionPayload = {
  __typename?: 'DeleteMessageSubscriptionPayload';
  message: Message;
};

export type DeleteMessagesInput = {
  id?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type DeleteMessagesPayload = {
  __typename?: 'DeleteMessagesPayload';
  deletedAmount?: Maybe<Scalars['Int']>;
  messages?: Maybe<Array<Maybe<Message>>>;
};

export type DeleteOrderInput = {
  orderId: Scalars['ID'];
};

export type DeleteOrderPayload = {
  __typename?: 'DeleteOrderPayload';
  order?: Maybe<Order>;
};

export type DeleteOrderSubscriptionPayload = {
  __typename?: 'DeleteOrderSubscriptionPayload';
  order: Order;
};

export type DeletePaymentOptionInput = {
  id: Scalars['ID'];
};

export type DeletePaymentOptionPayload = {
  __typename?: 'DeletePaymentOptionPayload';
  paymentOption?: Maybe<PaymentOption>;
};

export type DeletePollInput = {
  pollId: Scalars['ID'];
};

export type DeletePollPayload = {
  __typename?: 'DeletePollPayload';
  poll?: Maybe<Poll>;
};

export type DeletePollSubscriptionPayload = {
  __typename?: 'DeletePollSubscriptionPayload';
  pollId?: Maybe<Scalars['ID']>;
};

export type DeletePromoCodeInput = {
  id: Scalars['ID'];
};

export type DeletePromoCodeSubscriptionPayload = {
  __typename?: 'DeletePromoCodeSubscriptionPayload';
  promoCode: PromoCode;
};

export type DeleteProxyInput = {
  id: Scalars['ID'];
};

export type DeleteProxyPayload = {
  __typename?: 'DeleteProxyPayload';
  proxy: Proxy;
};

export type DeleteRetailerInput = {
  retailerId: Scalars['ID'];
};

export type DeleteSocialStoryInput = {
  id: Scalars['ID'];
};

export type DeleteSocialStoryPayload = {
  __typename?: 'DeleteSocialStoryPayload';
  deleted: Scalars['Boolean'];
};

export type DeleteSteamAssetSubscriptionPayload = {
  __typename?: 'DeleteSteamAssetSubscriptionPayload';
  steamAsset: SteamAsset;
};

export type DeleteSteamBotPayload = {
  __typename?: 'DeleteSteamBotPayload';
  steamBot?: Maybe<SteamBot>;
};

export type DeleteSteamBotSubscriptionPayload = {
  __typename?: 'DeleteSteamBotSubscriptionPayload';
  steamBot: SteamBot;
};

export type DeleteSteamOfferPayload = {
  __typename?: 'DeleteSteamOfferPayload';
  steamOffer?: Maybe<SteamOffer>;
};

export type DeleteSteamOfferSubscriptionPayload = {
  __typename?: 'DeleteSteamOfferSubscriptionPayload';
  steamOffer: SteamOffer;
};

export type DeleteTagInput = {
  id: Scalars['ID'];
};

export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  tag?: Maybe<Tag>;
};

export type DeleteTagSubscriptionPayload = {
  __typename?: 'DeleteTagSubscriptionPayload';
  tag: Tag;
};

export type DeleteTileSettingInput = {
  tileSettingId: Scalars['ID'];
};

export type DeleteUserAddressInput = {
  userAddressId: Scalars['ID'];
};

export type DeleteUserCommunicationInput = {
  userCommunicationId: Scalars['ID'];
};

export type DeleteUserCommunicationPayload = {
  __typename?: 'DeleteUserCommunicationPayload';
  userCommunication: UserCommunication;
};

export type DeleteUserCommunicationSubscriptionPayload = {
  __typename?: 'DeleteUserCommunicationSubscriptionPayload';
  userCommunication: UserCommunication;
};

export type DeleteUserItemSubscriptionPayload = {
  __typename?: 'DeleteUserItemSubscriptionPayload';
  userItem: UserItem;
};

export type DeleteUserTierAssetSubscriptionPayload = {
  __typename?: 'DeleteUserTierAssetSubscriptionPayload';
  userTierAsset: UserTierAsset;
};

export type DeleteZincOrderSubscriptionPayload = {
  __typename?: 'DeleteZincOrderSubscriptionPayload';
  zincOrder: ZincOrder;
};

export enum Device {
  Desktop = 'DESKTOP',
  Mobile = 'MOBILE'
}

export type DiceBet = Node & {
  __typename?: 'DiceBet';
  affiliateUserId?: Maybe<Scalars['ID']>;
  amount: Scalars['Float'];
  betItems?: Maybe<Array<DiceBetItem>>;
  chance: Scalars['Float'];
  choice: DiceBetChoice;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  desiredItemVariant?: Maybe<ItemVariant>;
  desiredItemVariantId?: Maybe<Scalars['ID']>;
  gameProviderFeePercent?: Maybe<Scalars['Float']>;
  gameType: DiceGameType;
  houseEdgePercent: Scalars['Float'];
  id: Scalars['ID'];
  profit: Scalars['Float'];
  rakeback?: Maybe<Scalars['Float']>;
  roll: Roll;
  rollId: Scalars['ID'];
  ticketsWon: Scalars['Int'];
  totalBet: Scalars['Float'];
  totalPayout: Scalars['Float'];
  totalRemainderPayout: Scalars['Float'];
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  won: Scalars['Boolean'];
  wonUserItem?: Maybe<UserItem>;
  wonUserItemId?: Maybe<Scalars['ID']>;
};

export enum DiceBetChoice {
  Over = 'OVER',
  Under = 'UNDER'
}

export type DiceBetConnection = {
  __typename?: 'DiceBetConnection';
  edges?: Maybe<Array<Maybe<DiceBetEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type DiceBetEdge = {
  __typename?: 'DiceBetEdge';
  cursor: Scalars['String'];
  node?: Maybe<DiceBet>;
};

export type DiceBetItem = {
  __typename?: 'DiceBetItem';
  itemVariant: ItemVariant;
  itemVariantId: Scalars['ID'];
  userItem: UserItem;
  userItemId: Scalars['ID'];
  value: Scalars['Float'];
};

export enum DiceBetMode {
  Animation = 'ANIMATION',
  Auto = 'AUTO',
  Batch = 'BATCH',
  Manual = 'MANUAL'
}

export enum DiceBetOrderBy {
  Chance = 'CHANCE',
  ChanceDesc = 'CHANCE_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Profit = 'PROFIT',
  ProfitDesc = 'PROFIT_DESC',
  TotalBet = 'TOTAL_BET',
  TotalBetDesc = 'TOTAL_BET_DESC'
}

export type DiceBetStats = {
  __typename?: 'DiceBetStats';
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  totalBet?: Maybe<Scalars['Float']>;
  totalPayout?: Maybe<Scalars['Float']>;
  totalProfit?: Maybe<Scalars['Float']>;
};

export enum DiceGameType {
  Dice = 'DICE',
  Upgrade = 'UPGRADE'
}

export type DigitalCode = Node & {
  __typename?: 'DigitalCode';
  code?: Maybe<Scalars['String']>;
  consumedAt?: Maybe<Scalars['SequelizeDate']>;
  createdAt: Scalars['SequelizeDate'];
  creator?: Maybe<User>;
  creatorId?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  deletor?: Maybe<User>;
  deletorId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  itemVariantIds: Array<Scalars['ID']>;
  itemVariants: Array<ItemVariant>;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
  userItem?: Maybe<UserItem>;
  userItemId?: Maybe<Scalars['ID']>;
};

export type DigitalCodeConnection = {
  __typename?: 'DigitalCodeConnection';
  edges?: Maybe<Array<Maybe<DigitalCodeEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type DigitalCodeEdge = {
  __typename?: 'DigitalCodeEdge';
  cursor: Scalars['String'];
  node?: Maybe<DigitalCode>;
};

export enum DigitalCodeOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type DisableTotpTwoFactorAuthenticationInput = {
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type DisableTotpTwoFactorAuthenticationPayload = {
  __typename?: 'DisableTotpTwoFactorAuthenticationPayload';
  success: Scalars['Boolean'];
};

export type Document = Node & {
  __typename?: 'Document';
  asset?: Maybe<Asset>;
  assetId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['SequelizeDate'];
  deletedAt: Scalars['SequelizeDate'];
  id: Scalars['ID'];
  type?: Maybe<DocumentType>;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  verified?: Maybe<Scalars['Boolean']>;
};

export type DocumentConnection = {
  __typename?: 'DocumentConnection';
  edges?: Maybe<Array<Maybe<DocumentEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type DocumentEdge = {
  __typename?: 'DocumentEdge';
  cursor: Scalars['String'];
  node?: Maybe<Document>;
};

export enum DocumentOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum DocumentType {
  Identity = 'IDENTITY',
  Residence = 'RESIDENCE'
}

export type DropAddedRequestSubscriptionPayload = {
  __typename?: 'DropAddedRequestSubscriptionPayload';
  drop: DropCacheItem;
};

export type DropCacheItem = {
  __typename?: 'DropCacheItem';
  createdAt: Scalars['SequelizeDate'];
  id: Scalars['ID'];
  meta?: Maybe<DropCacheItemMeta>;
  type: DropCacheItemType;
  value: Scalars['Float'];
};

export type DropCacheItemMeta = BoxOpening | DiceBet;

export enum DropCacheItemType {
  BoxOpening = 'BOX_OPENING',
  UpgradeWin = 'UPGRADE_WIN'
}

export type DropCacheItemsPayload = {
  __typename?: 'DropCacheItemsPayload';
  latestDropBoxSlugCacheItems: Array<DropCacheItem>;
  latestDropCacheItems: Array<DropCacheItem>;
  topDropBoxSlugByDaysCacheItems: Array<DropCacheItem>;
  topDropBoxSlugCacheItems: Array<DropCacheItem>;
  topDropCacheItems: Array<DropCacheItem>;
  /** Will return the top wins by x days, defined in box:cache_best_drops_time_days setting. */
  topDropCacheItemsByDays: Array<DropCacheItem>;
};

export type EmailWaitingList = Node & {
  __typename?: 'EmailWaitingList';
  createdAt: Scalars['SequelizeDate'];
  email: Scalars['String'];
  id: Scalars['ID'];
  status: EmailWaitingListStatus;
  updatedAt: Scalars['SequelizeDate'];
};

export type EmailWaitingListConnection = {
  __typename?: 'EmailWaitingListConnection';
  edges?: Maybe<Array<Maybe<EmailWaitingListEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type EmailWaitingListEdge = {
  __typename?: 'EmailWaitingListEdge';
  cursor: Scalars['String'];
  node?: Maybe<EmailWaitingList>;
};

export type EmailWaitingListInput = {
  email: Scalars['String'];
};

export enum EmailWaitingListOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type EmailWaitingListPayload = {
  __typename?: 'EmailWaitingListPayload';
  email: Scalars['String'];
  status: EmailWaitingListStatus;
};

export enum EmailWaitingListStatus {
  Invited = 'INVITED',
  Waiting = 'WAITING'
}

export type EmulateCrashGamePayload = {
  __typename?: 'EmulateCrashGamePayload';
  crashGame: CrashGame;
};

export type EmulateGamePayload = {
  __typename?: 'EmulateGamePayload';
  game: Game;
};

export type EnableTotpTwoFactorAuthenticationInput = {
  token: Scalars['String'];
};

export type EnableTotpTwoFactorAuthenticationPayload = {
  __typename?: 'EnableTotpTwoFactorAuthenticationPayload';
  backupCodes?: Maybe<Array<UserTwoFactorBackupCode>>;
  valid: Scalars['Boolean'];
};

export type Exchange = Node & {
  __typename?: 'Exchange';
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  id: Scalars['ID'];
  itemVariants: ItemVariantConnection;
  itemsValue: Scalars['Float'];
  newUserItems: UserItemConnection;
  profit: Scalars['Float'];
  remainder: Scalars['Float'];
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
  userItems: UserItemConnection;
  userItemsValue: Scalars['Float'];
};


export type ExchangeItemVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};


export type ExchangeNewUserItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};


export type ExchangeUserItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};

export type ExchangeConnection = {
  __typename?: 'ExchangeConnection';
  edges?: Maybe<Array<Maybe<ExchangeEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type ExchangeEdge = {
  __typename?: 'ExchangeEdge';
  cursor: Scalars['String'];
  node?: Maybe<Exchange>;
};

export enum ExchangeOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  currency?: Maybe<Scalars['String']>;
  provider?: Maybe<ExchangeRateProvider>;
  rate?: Maybe<Scalars['Float']>;
};


export type ExchangeRateRateArgs = {
  reverse?: InputMaybe<Scalars['Boolean']>;
};

export enum ExchangeRateProvider {
  CoinApi = 'COIN_API',
  CoinLayer = 'COIN_LAYER',
  Fixer = 'FIXER'
}

export type ExchangeRates = {
  __typename?: 'ExchangeRates';
  currency?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['SequelizeDate']>;
  rates?: Maybe<Array<Maybe<ExchangeRate>>>;
  updatedAt?: Maybe<Scalars['SequelizeDate']>;
};

export type ExchangeStats = {
  __typename?: 'ExchangeStats';
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  itemsValue?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
  remainder?: Maybe<Scalars['Float']>;
  userItemsValue?: Maybe<Scalars['Float']>;
};

export type ExitAllActivePvpGamesPayload = {
  __typename?: 'ExitAllActivePvpGamesPayload';
  pvpGames: Array<Maybe<PvpGame>>;
};

export type ExitCrashInput = {
  betId: Scalars['ID'];
  secret?: InputMaybe<Scalars['String']>;
};

export type ExitCrashPayload = {
  __typename?: 'ExitCrashPayload';
  crashBet?: Maybe<CrashBet>;
};

export type ExitPvpGameInput = {
  pvpGameId: Scalars['ID'];
};

export type ExitPvpGamePayload = {
  __typename?: 'ExitPvpGamePayload';
  pvpGame: PvpGame;
};

export type ExportUserPollOptionsInput = {
  pollId: Scalars['ID'];
};

export type ExportUserPollOptionsPayload = {
  __typename?: 'ExportUserPollOptionsPayload';
  asset?: Maybe<Asset>;
};

export enum ExternalModel {
  User = 'User',
  WalletChange = 'WalletChange'
}

export type FavouriteBox = {
  __typename?: 'FavouriteBox';
  box?: Maybe<Box>;
  totalOpenings: Scalars['Int'];
};

export type FinishAllActivePvpGamesPayload = {
  __typename?: 'FinishAllActivePvpGamesPayload';
  pvpGames: Array<Maybe<PvpGame>>;
};

export type FinishGameInput = {
  gameId: Scalars['ID'];
  secret?: InputMaybe<Scalars['String']>;
};

export type FinishGamePayload = {
  __typename?: 'FinishGamePayload';
  success: Scalars['Boolean'];
};

export type FlattenItemInput = {
  itemId?: InputMaybe<Scalars['ID']>;
};

export type FlattenItemPayload = {
  __typename?: 'FlattenItemPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type FlushAchievementCacheInput = {
  unused?: InputMaybe<Scalars['Boolean']>;
};

export type FlushAchievementCachePayload = {
  __typename?: 'FlushAchievementCachePayload';
  achievements?: Maybe<Array<Maybe<Achievement>>>;
};

export type FlushSettingCachePayload = {
  __typename?: 'FlushSettingCachePayload';
  settings?: Maybe<Array<Maybe<Setting>>>;
};

export type FlushSettingInput = {
  unused?: InputMaybe<Scalars['Boolean']>;
};

export type FlushUserAchievementCacheInput = {
  userId: Scalars['ID'];
};

export type FlushUserAchievementCachePayload = {
  __typename?: 'FlushUserAchievementCachePayload';
  userAchievementIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
  recaptcha: Scalars['String'];
  redirectUri: Scalars['String'];
  visualRecaptcha?: InputMaybe<Scalars['String']>;
};

export type ForgotPasswordPayload = {
  __typename?: 'ForgotPasswordPayload';
  success: Scalars['Boolean'];
};

export type FullMoonPromotionMeta = {
  __typename?: 'FullMoonPromotionMeta';
  fullMoonDates: Array<Scalars['SequelizeDate']>;
};

export type Game = Node & {
  __typename?: 'Game';
  bets: BetConnection;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  id: Scalars['ID'];
  maxPlayers?: Maybe<Scalars['Int']>;
  roll?: Maybe<Roll>;
  rollId?: Maybe<Scalars['ID']>;
  rollValue?: Maybe<Scalars['Int']>;
  scheduledAt?: Maybe<Scalars['SequelizeDate']>;
  status: GameStatus;
  totalBet?: Maybe<Scalars['Float']>;
  totalBetCount?: Maybe<Scalars['Float']>;
  totalPayout?: Maybe<Scalars['Float']>;
  totalUserCount?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['SequelizeDate'];
};


export type GameBetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};

export type GameConnection = {
  __typename?: 'GameConnection';
  edges?: Maybe<Array<Maybe<GameEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type GameEdge = {
  __typename?: 'GameEdge';
  cursor: Scalars['String'];
  node?: Maybe<Game>;
};

export type GameJackpot = Node & {
  __typename?: 'GameJackpot';
  completedAt?: Maybe<Scalars['SequelizeDate']>;
  consecutiveCount: Scalars['Int'];
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  game?: Maybe<Game>;
  gameId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  initialValue: Scalars['Float'];
  payoutStructure: Array<GameJackpotPayoutStructure>;
  totalValue: Scalars['Float'];
  updatedAt: Scalars['SequelizeDate'];
  value: Scalars['Float'];
  wager: Scalars['Float'];
  winners: GameJackpotWinnerConnection;
};


export type GameJackpotWinnersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<GameJackpotWinnerOrderBy>>>;
};

export type GameJackpotConnection = {
  __typename?: 'GameJackpotConnection';
  edges?: Maybe<Array<Maybe<GameJackpotEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type GameJackpotEdge = {
  __typename?: 'GameJackpotEdge';
  cursor: Scalars['String'];
  node?: Maybe<GameJackpot>;
};

export enum GameJackpotOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Value = 'VALUE',
  ValueDesc = 'VALUE_DESC'
}

export type GameJackpotPayoutStructure = {
  __typename?: 'GameJackpotPayoutStructure';
  payoutPercent: Scalars['Float'];
};

export type GameJackpotStats = {
  __typename?: 'GameJackpotStats';
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  totalInitialValue?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
  totalWageredValue?: Maybe<Scalars['Float']>;
};

export type GameJackpotWinner = Node & {
  __typename?: 'GameJackpotWinner';
  amount: Scalars['Float'];
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  gameJackpot: GameJackpot;
  gameJackpotId: Scalars['ID'];
  id: Scalars['ID'];
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
};

export type GameJackpotWinnerConnection = {
  __typename?: 'GameJackpotWinnerConnection';
  edges?: Maybe<Array<Maybe<GameJackpotWinnerEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type GameJackpotWinnerEdge = {
  __typename?: 'GameJackpotWinnerEdge';
  cursor: Scalars['String'];
  node?: Maybe<GameJackpotWinner>;
};

export enum GameJackpotWinnerOrderBy {
  Amount = 'AMOUNT',
  AmountDesc = 'AMOUNT_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type GameMessage = {
  __typename?: 'GameMessage';
  body: Scalars['String'];
  gameId: Scalars['ID'];
  userId: Scalars['ID'];
};

export enum GameOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type GameProfit = {
  __typename?: 'GameProfit';
  boxes?: Maybe<Scalars['Float']>;
  boxesPvp?: Maybe<Scalars['Float']>;
  crash?: Maybe<Scalars['Float']>;
  dice?: Maybe<Scalars['Float']>;
  liveGames?: Maybe<Scalars['Float']>;
  plinko?: Maybe<Scalars['Float']>;
  roulette?: Maybe<Scalars['Float']>;
  slots?: Maybe<Scalars['Float']>;
  upgrades?: Maybe<Scalars['Float']>;
};

export type GameStats = {
  __typename?: 'GameStats';
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  totalBet?: Maybe<Scalars['Float']>;
  totalBetCount?: Maybe<Scalars['Int']>;
  totalPayout?: Maybe<Scalars['Float']>;
  totalUserCount?: Maybe<Scalars['Int']>;
};

export enum GameStatus {
  Created = 'CREATED',
  Finished = 'FINISHED',
  Started = 'STARTED'
}

export enum GameType {
  Boxes = 'BOXES',
  Crash = 'CRASH',
  Dice = 'DICE',
  Gemstone = 'GEMSTONE',
  MatchBetting = 'MATCH_BETTING',
  Plinko = 'PLINKO',
  Pvp = 'PVP',
  PvpBox = 'PVP_BOX',
  PvpCoinFlip = 'PVP_COIN_FLIP',
  PvpDice = 'PVP_DICE',
  RankUp = 'RANK_UP',
  Roulette = 'ROULETTE'
}

export type GameWageringRequirement = {
  __typename?: 'GameWageringRequirement';
  gameType: GameType;
  wagerAmount: Scalars['Float'];
};

export type GameWageringRequirementInput = {
  gameType: GameType;
  wagerAmount: Scalars['Float'];
};

export type GemstoneBoost = {
  __typename?: 'GemstoneBoost';
  activationPeriod: Scalars['Int'];
  amountMultiplier?: Maybe<Scalars['Float']>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  endAt: Scalars['SequelizeDate'];
  id: Scalars['ID'];
  startAt: Scalars['SequelizeDate'];
  status: GemstoneBoostStatus;
  teamBoostActivatedByItemVariant?: Maybe<ItemVariant>;
  teamBoostActivatedByItemVariantId?: Maybe<Scalars['ID']>;
  teamGemstoneThreshold?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['SequelizeDate'];
  userBoostActivatedByItemVariant?: Maybe<ItemVariant>;
  userBoostActivatedByItemVariantId?: Maybe<Scalars['ID']>;
  userGemstoneThreshold?: Maybe<Scalars['Float']>;
  walletType: WalletType;
};

export enum GemstoneBoostActivatedByAction {
  ItemVariantUnboxing = 'ITEM_VARIANT_UNBOXING',
  TotalPoints = 'TOTAL_POINTS'
}

export type GemstoneBoostActivation = {
  __typename?: 'GemstoneBoostActivation';
  activatedByAction: GemstoneBoostActivatedByAction;
  activatedByItemVariant?: Maybe<ItemVariant>;
  activatedByItemVariantId?: Maybe<Scalars['ID']>;
  activatedByUser?: Maybe<User>;
  activatedByUserId?: Maybe<Scalars['ID']>;
  amountMultiplier?: Maybe<Scalars['Float']>;
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  endAt?: Maybe<Scalars['SequelizeDate']>;
  gemstoneBoost: GemstoneBoost;
  gemstoneBoostId: Scalars['ID'];
  id: Scalars['ID'];
  startAt?: Maybe<Scalars['SequelizeDate']>;
  team?: Maybe<Team>;
  teamId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type GemstoneBoostActivationConnection = {
  __typename?: 'GemstoneBoostActivationConnection';
  edges?: Maybe<Array<Maybe<GemstoneBoostActivationEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type GemstoneBoostActivationEdge = {
  __typename?: 'GemstoneBoostActivationEdge';
  cursor: Scalars['String'];
  node?: Maybe<GemstoneBoostActivation>;
};

export enum GemstoneBoostActivationOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type GemstoneBoostInfo = {
  __typename?: 'GemstoneBoostInfo';
  gemstoneBoost?: Maybe<GemstoneBoost>;
  teamsInfo: Array<GemstoneBoostTeamInfo>;
  userInfo?: Maybe<GemstoneBoostUserInfo>;
};

export enum GemstoneBoostStatus {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED'
}

export type GemstoneBoostTeamInfo = {
  __typename?: 'GemstoneBoostTeamInfo';
  currentPoints: Scalars['Float'];
  pointThreshold?: Maybe<Scalars['Int']>;
  team: Team;
  teamId: Scalars['ID'];
  totalActivationsByItemVariant: Scalars['Int'];
  totalActivationsByPoints: Scalars['Int'];
  totalPoints: Scalars['Float'];
};

export type GemstoneBoostUserInfo = {
  __typename?: 'GemstoneBoostUserInfo';
  currentPoints: Scalars['Float'];
  pointThreshold?: Maybe<Scalars['Int']>;
  totalActivationsByItemVariant: Scalars['Int'];
  totalActivationsByPoints: Scalars['Int'];
  totalPoints: Scalars['Float'];
  user: User;
  userId: Scalars['ID'];
};

export type GemstoneGame = Node & {
  __typename?: 'GemstoneGame';
  betAmount?: Maybe<Scalars['Float']>;
  chance?: Maybe<Scalars['Float']>;
  createdAt: Scalars['SequelizeDate'];
  currency?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  gemstoneBoostActivation?: Maybe<GemstoneBoostActivation>;
  gemstoneBoostActivationId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  walletType?: Maybe<WalletType>;
  winAmount?: Maybe<Scalars['Float']>;
};

export type GemstoneGameConnection = {
  __typename?: 'GemstoneGameConnection';
  edges?: Maybe<Array<Maybe<GemstoneGameEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type GemstoneGameEdge = {
  __typename?: 'GemstoneGameEdge';
  cursor: Scalars['String'];
  node?: Maybe<GemstoneGame>;
};

export type GemstoneGameLeaderboard = {
  __typename?: 'GemstoneGameLeaderboard';
  board?: Maybe<Array<Maybe<GemstoneGameLeaderboardNode>>>;
  myItem?: Maybe<GemstoneGameLeaderboardNode>;
};

export type GemstoneGameLeaderboardBox = {
  __typename?: 'GemstoneGameLeaderboardBox';
  box?: Maybe<Box>;
  boxId?: Maybe<Scalars['ID']>;
  winAmount?: Maybe<Scalars['Float']>;
};

export type GemstoneGameLeaderboardNode = {
  __typename?: 'GemstoneGameLeaderboardNode';
  boxes?: Maybe<Array<Maybe<GemstoneGameLeaderboardBox>>>;
  /** @deprecated Removed as too expensive */
  luck?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Int']>;
  spent?: Maybe<Scalars['Float']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
  winAmount?: Maybe<Scalars['Float']>;
};

export enum GemstoneGameOrderBy {
  BetAmount = 'BET_AMOUNT',
  BetAmountDesc = 'BET_AMOUNT_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  WinAmount = 'WIN_AMOUNT',
  WinAmountDesc = 'WIN_AMOUNT_DESC'
}

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type GenerateBoxesCsvInput = {
  after?: InputMaybe<Scalars['String']>;
  ancestorBoxId?: InputMaybe<Scalars['ID']>;
  availableFrom?: InputMaybe<Scalars['SequelizeDate']>;
  availableUntil?: InputMaybe<Scalars['SequelizeDate']>;
  before?: InputMaybe<Scalars['String']>;
  boxName?: InputMaybe<Scalars['String']>;
  dailyLimited?: InputMaybe<Scalars['Boolean']>;
  discounted?: InputMaybe<Scalars['Boolean']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  excludeTags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  free?: InputMaybe<Scalars['Boolean']>;
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  itemId?: InputMaybe<Scalars['ID']>;
  itemIds?: InputMaybe<Array<Scalars['ID']>>;
  itemName?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  marketId?: InputMaybe<Scalars['ID']>;
  marketSlug?: InputMaybe<Scalars['String']>;
  maxCost?: InputMaybe<Scalars['Float']>;
  maxValue?: InputMaybe<Scalars['Float']>;
  minCost?: InputMaybe<Scalars['Float']>;
  minLevelRequired?: InputMaybe<Scalars['Int']>;
  minValue?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  openable?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Array<InputMaybe<BoxOrderBy>>>;
  purchasable?: InputMaybe<Scalars['Boolean']>;
  sellable?: InputMaybe<Scalars['Boolean']>;
  slotTypes?: InputMaybe<Array<BoxSlotType>>;
  statsProcessedAt?: InputMaybe<Scalars['SequelizeDate']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<BoxType>;
  walletRestrictions?: InputMaybe<Array<InputMaybe<WalletType>>>;
};

export type GenerateBoxesCsvPayload = {
  __typename?: 'GenerateBoxesCsvPayload';
  fileName: Scalars['String'];
};

export type GenerateMatchBettingReportInput = {
  createdAtMaxDate: Scalars['SequelizeDate'];
  createdAtMinDate: Scalars['SequelizeDate'];
  provider: MatchBettingProvider;
};

export type GenerateMatchBettingReportPayload = {
  __typename?: 'GenerateMatchBettingReportPayload';
  fileName?: Maybe<Scalars['String']>;
  status: MatchBettingReportStatus;
};

export type GenerateNewTotpTwoFactorBackupCodesInput = {
  token: Scalars['String'];
};

export type GenerateNewTotpTwoFactorBackupCodesPayload = {
  __typename?: 'GenerateNewTotpTwoFactorBackupCodesPayload';
  backupCodes: Array<UserTwoFactorBackupCode>;
};

export type GenerateTotpTwoFactorAuthenticationSecretPayload = {
  __typename?: 'GenerateTotpTwoFactorAuthenticationSecretPayload';
  secret: Scalars['String'];
};

export type GenerateTradesCsvInput = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  bySupplier?: InputMaybe<Scalars['Boolean']>;
  depositorSteamId?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  marketName?: InputMaybe<Scalars['String']>;
  maxMarkupPercent?: InputMaybe<Scalars['Float']>;
  maxTotalValue?: InputMaybe<Scalars['Float']>;
  minTotalValue?: InputMaybe<Scalars['Float']>;
  orderBy?: InputMaybe<Array<InputMaybe<TradeOrderBy>>>;
  status?: InputMaybe<TradeStatus>;
  statuses?: InputMaybe<Array<TradeStatus>>;
  steamAppName?: InputMaybe<SteamAppName>;
  tradeId?: InputMaybe<Scalars['ID']>;
  updatedAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  updatedAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  userId?: InputMaybe<Scalars['ID']>;
  withdrawerSteamId?: InputMaybe<Scalars['String']>;
};

export type GenerateTradesCsvPayload = {
  __typename?: 'GenerateTradesCsvPayload';
  fileName: Scalars['String'];
};

export type GenerateTransactionsCsvInput = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  /** @deprecated Use 'minDate' */
  createdAfter?: InputMaybe<Scalars['String']>;
  /** @deprecated Use 'maxDate' */
  createdBefore?: InputMaybe<Scalars['String']>;
  externalIds?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  maxDate?: InputMaybe<Scalars['String']>;
  minDate?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<TransactionOrderBy>>>;
  promoCodeId?: InputMaybe<Scalars['ID']>;
  provider?: InputMaybe<PaymentProvider>;
  providers?: InputMaybe<Array<PaymentProvider>>;
  /** @deprecated Use 'statuses' */
  status?: InputMaybe<Scalars['String']>;
  statuses?: InputMaybe<Array<TransactionStatus>>;
  transactionId?: InputMaybe<Scalars['ID']>;
  types?: InputMaybe<Array<TransactionType>>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type GenerateTransactionsCsvPayload = {
  __typename?: 'GenerateTransactionsCsvPayload';
  fileName: Scalars['String'];
};

export type GenerateUserDepositWithdrawalCsvInput = {
  orderBy: UserDepositWithdrawalReportOrderBy;
  sources: Array<UserDepositWithdrawalReportSource>;
  types: Array<UserDepositWithdrawalReportTransactionType>;
  userId: Scalars['ID'];
};

export type GenerateUserDepositWithdrawalCsvPayload = {
  __typename?: 'GenerateUserDepositWithdrawalCsvPayload';
  fileName?: Maybe<Scalars['String']>;
};

export type GenerateWalletChangesCsvInput = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  createdAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<WalletChangeOrderBy>>>;
  type?: InputMaybe<Array<WalletChangeType>>;
  userId?: InputMaybe<Scalars['ID']>;
  walletIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type GenerateWalletChangesCsvPayload = {
  __typename?: 'GenerateWalletChangesCsvPayload';
  fileName: Scalars['String'];
};

export type GeoTrack = Node & {
  __typename?: 'GeoTrack';
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['SequelizeDate'];
  id: Scalars['ID'];
  ip?: Maybe<Scalars['String']>;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
};

export type GeoTrackConnection = {
  __typename?: 'GeoTrackConnection';
  edges?: Maybe<Array<Maybe<GeoTrackEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type GeoTrackEdge = {
  __typename?: 'GeoTrackEdge';
  cursor: Scalars['String'];
  node?: Maybe<GeoTrack>;
};

export enum GeoTrackOrderBy {
  Country = 'COUNTRY',
  CountryDesc = 'COUNTRY_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type GeoTrackSummary = {
  __typename?: 'GeoTrackSummary';
  countries: Array<GeoTrackSummaryItem>;
  ips: Array<GeoTrackSummaryItem>;
  totalCountries: Array<GeoTrackSummaryItem>;
  totalIps: Array<GeoTrackSummaryItem>;
};

export type GeoTrackSummaryItem = {
  __typename?: 'GeoTrackSummaryItem';
  id: Scalars['String'];
  score: Scalars['Int'];
};

export type GeoTrackUserSummary = {
  __typename?: 'GeoTrackUserSummary';
  countries: Array<Scalars['String']>;
  ips: Array<Scalars['String']>;
  totalCountries: Array<GeoTrackSummaryItem>;
  totalIps: Array<GeoTrackSummaryItem>;
};

export type GetDropCacheItemOptions = {
  boxId?: InputMaybe<Scalars['ID']>;
  /** Specify which drop types to include in list. */
  include: Array<DropCacheItemType>;
  limit: Scalars['Int'];
};

export type GetDropCacheItemsInput = {
  latestDropCacheItemOptions: GetDropCacheItemOptions;
  /** Indicates whether to automatically purge items in latests drops which are also included in top drops */
  purgeDuplicates?: InputMaybe<Scalars['Boolean']>;
  /** Include top wins of the week or top wins of a specific box. */
  topDropCacheBoxSlugItemOptions?: InputMaybe<GetDropCacheItemOptions>;
  /** Include top wins of the week or x days defined in settings. */
  topDropCacheItemByDaysOptions?: InputMaybe<GetDropCacheItemOptions>;
  /** Leave undefined to omit top wins from results. */
  topDropCacheItemOptions?: InputMaybe<GetDropCacheItemOptions>;
};

export type GetTileOpeningRewardAmountPayload = {
  __typename?: 'GetTileOpeningRewardAmountPayload';
  rewardAmount: Scalars['Float'];
  rewardAmountBase: Scalars['Float'];
};

export type GetUserTierAssetsStatusesPayload = {
  __typename?: 'GetUserTierAssetsStatusesPayload';
  canClaim?: Maybe<Scalars['Boolean']>;
  userTierAsset?: Maybe<UserTierAsset>;
};

export type GiftCardOption = Node & {
  __typename?: 'GiftCardOption';
  amount: Scalars['Float'];
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  enabled: Scalars['Boolean'];
  externalUrl: Scalars['String'];
  iconUrl: Scalars['String'];
  id: Scalars['ID'];
  market: Market;
  marketId: Scalars['ID'];
  order?: Maybe<Scalars['Int']>;
  provider: GiftCardProvider;
  updatedAt: Scalars['SequelizeDate'];
};

export type GiftCardOptionConnection = {
  __typename?: 'GiftCardOptionConnection';
  edges?: Maybe<Array<Maybe<GiftCardOptionEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type GiftCardOptionEdge = {
  __typename?: 'GiftCardOptionEdge';
  cursor: Scalars['String'];
  node?: Maybe<GiftCardOption>;
};

export enum GiftCardOptionOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Order = 'ORDER',
  OrderDesc = 'ORDER_DESC'
}

export enum GiftCardProvider {
  G2Apay = 'G2APAY',
  Gamivo = 'GAMIVO',
  Kinguin = 'KINGUIN'
}

export type Giveaway = Node & {
  __typename?: 'Giveaway';
  completedAt?: Maybe<Scalars['SequelizeDate']>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  endAt?: Maybe<Scalars['SequelizeDate']>;
  entryRequirements?: Maybe<GiveawayEntryRequirements>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  rewardAmount: Scalars['Int'];
  startAt?: Maybe<Scalars['SequelizeDate']>;
  status: GiveawayStatus;
  totalEntries: Scalars['Int'];
  updatedAt: Scalars['SequelizeDate'];
  walletType: WalletType;
  winnersAmount: Scalars['Int'];
};

export type GiveawayConnection = {
  __typename?: 'GiveawayConnection';
  edges?: Maybe<Array<Maybe<GiveawayEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type GiveawayEdge = {
  __typename?: 'GiveawayEdge';
  cursor: Scalars['String'];
  node?: Maybe<Giveaway>;
};

export type GiveawayEntryRequirements = {
  __typename?: 'GiveawayEntryRequirements';
  userLastDepositAt?: Maybe<Scalars['SequelizeDate']>;
  userLastDepositAtIn?: Maybe<Scalars['Duration']>;
  userLevel?: Maybe<Scalars['Int']>;
};

export type GiveawayEntryRequirementsInput = {
  userLastDepositAt?: InputMaybe<Scalars['SequelizeDate']>;
  userLastDepositAtIn?: InputMaybe<Scalars['Duration']>;
  userLevel?: InputMaybe<Scalars['Int']>;
};

export enum GiveawayOrderBy {
  CompletedAt = 'COMPLETED_AT',
  CompletedAtDesc = 'COMPLETED_AT_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EndAt = 'END_AT',
  EndAtDesc = 'END_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  StartAt = 'START_AT',
  StartAtDesc = 'START_AT_DESC'
}

export type GiveawayStats = {
  __typename?: 'GiveawayStats';
  count: Scalars['Int'];
  currency: Scalars['String'];
  totalRewardAmount: Scalars['Float'];
};

export enum GiveawayStatus {
  Completed = 'COMPLETED',
  Created = 'CREATED',
  Ended = 'ENDED',
  Started = 'STARTED'
}

export type IncreaseWithdrawalRequestInput = {
  amount: Scalars['Float'];
  globalId: Scalars['String'];
};

export type IncreaseWithdrawalRequestPayload = {
  __typename?: 'IncreaseWithdrawalRequestPayload';
  withdrawalRequest: WithdrawalRequest;
};

export type InvalidateAllUserSessionsInput = {
  userId?: InputMaybe<Scalars['ID']>;
};

export type InvalidateAllUserSessionsPayload = {
  __typename?: 'InvalidateAllUserSessionsPayload';
  success: Scalars['Boolean'];
};

export type Inventory = {
  __typename?: 'Inventory';
  activeTradeItems: Array<ItemVariant>;
  steamItems: Array<InventoryItem>;
};

export type InventoryItem = {
  __typename?: 'InventoryItem';
  cacheExpiration?: Maybe<Scalars['String']>;
  itemVariant: ItemVariant;
  tradable: Scalars['Boolean'];
};

export type InventoryItemVariants = {
  __typename?: 'InventoryItemVariants';
  activeTradeItems: Array<ItemVariant>;
  steamItems: Array<ItemVariant>;
};

export type InviteCode = Node & {
  __typename?: 'InviteCode';
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  increasedInviteCount?: Maybe<Scalars['Int']>;
  redeemCount?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type InviteCodeConnection = {
  __typename?: 'InviteCodeConnection';
  edges: Array<Maybe<InviteCodeEdge>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type InviteCodeEdge = {
  __typename?: 'InviteCodeEdge';
  cursor: Scalars['String'];
  node?: Maybe<InviteCode>;
};

export enum InviteCodeOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type Item = Node & {
  __typename?: 'Item';
  availableAssets?: Maybe<Array<Maybe<AvailableAsset>>>;
  brand?: Maybe<Scalars['String']>;
  category?: Maybe<ItemCategory>;
  categoryId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  description?: Maybe<Scalars['String']>;
  displayValue?: Maybe<Scalars['Float']>;
  estimatedDeliveryInHours?: Maybe<Scalars['String']>;
  exchangeRate: Scalars['Float'];
  externalId?: Maybe<Scalars['String']>;
  externalMedia?: Maybe<Array<ItemExternalMedia>>;
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemVariants?: Maybe<Array<Maybe<ItemVariant>>>;
  marketId: Scalars['ID'];
  markup: Scalars['Float'];
  maxDisplayValue: Scalars['Float'];
  maxRarity?: Maybe<Scalars['String']>;
  maxValue: Scalars['Float'];
  minDisplayValue: Scalars['Float'];
  minRarity?: Maybe<Scalars['String']>;
  minValue: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  obtainable: Scalars['Boolean'];
  purchaseUrl?: Maybe<Scalars['String']>;
  releasedAt?: Maybe<Scalars['SequelizeDate']>;
  shippingCost?: Maybe<Scalars['Float']>;
  shippingInfo?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  type?: Maybe<ItemType>;
  updatedAt: Scalars['SequelizeDate'];
  usable: Scalars['Boolean'];
  users?: Maybe<Array<Maybe<User>>>;
  value: Scalars['Float'];
  valueRecentlyUpdated: Scalars['Boolean'];
  valueUpdatedAt?: Maybe<Scalars['SequelizeDate']>;
  withdrawable: Scalars['Boolean'];
};

export type ItemCategory = {
  __typename?: 'ItemCategory';
  id: Scalars['ID'];
  items: ItemConnection;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  shippingInfo?: Maybe<Scalars['String']>;
};


export type ItemCategoryItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  maxValue?: InputMaybe<Scalars['Float']>;
  minValue?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  obtainable?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Array<InputMaybe<ItemOrderBy>>>;
  usable?: InputMaybe<Scalars['Boolean']>;
  withdrawable?: InputMaybe<Scalars['Boolean']>;
};

export type ItemCategoryConnection = {
  __typename?: 'ItemCategoryConnection';
  edges?: Maybe<Array<Maybe<ItemCategoryEdge>>>;
  pageInfo: PageInfo;
};

export type ItemCategoryEdge = {
  __typename?: 'ItemCategoryEdge';
  cursor: Scalars['String'];
  node?: Maybe<ItemCategory>;
};

export enum ItemCategoryOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Order = 'ORDER',
  OrderDesc = 'ORDER_DESC'
}

export type ItemConnection = {
  __typename?: 'ItemConnection';
  edges?: Maybe<Array<Maybe<ItemEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type ItemEdge = {
  __typename?: 'ItemEdge';
  cursor: Scalars['String'];
  node?: Maybe<Item>;
};

export type ItemExternalMedia = {
  __typename?: 'ItemExternalMedia';
  height?: Maybe<Scalars['Int']>;
  mimeType: Scalars['String'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type ItemExternalMediaInput = {
  height?: InputMaybe<Scalars['Int']>;
  mimeType: Scalars['String'];
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export enum ItemOrderBy {
  AvailableAssets = 'AVAILABLE_ASSETS',
  AvailableAssetsDesc = 'AVAILABLE_ASSETS_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DisplayValue = 'DISPLAY_VALUE',
  DisplayValueDesc = 'DISPLAY_VALUE_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  ReleasedAt = 'RELEASED_AT',
  ReleasedAtDesc = 'RELEASED_AT_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  Value = 'VALUE',
  ValueDesc = 'VALUE_DESC',
  ValueUpdatedAt = 'VALUE_UPDATED_AT',
  ValueUpdatedAtDesc = 'VALUE_UPDATED_AT_DESC'
}

export enum ItemPurchasable {
  NotPurchasable = 'NOT_PURCHASABLE',
  Purchasable = 'PURCHASABLE',
  PurchasableWhenInStock = 'PURCHASABLE_WHEN_IN_STOCK'
}

export type ItemTagInput = {
  id: Scalars['ID'];
};

export enum ItemType {
  Code = 'CODE',
  Csgo = 'CSGO',
  Dota2 = 'DOTA2',
  H1Z1 = 'H1Z1',
  Irl = 'IRL',
  Osrs = 'OSRS',
  Pubg = 'PUBG',
  Rust = 'RUST',
  Steam = 'STEAM'
}

export type ItemVariant = {
  __typename?: 'ItemVariant';
  approvalStrategy?: Maybe<ItemVariantApprovalStrategy>;
  availableAssets?: Maybe<Array<AvailableAsset>>;
  brand?: Maybe<Scalars['String']>;
  category?: Maybe<ItemCategory>;
  categoryId?: Maybe<Scalars['ID']>;
  color?: Maybe<Scalars['String']>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  depositable: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  displayValue: Scalars['Float'];
  estimatedDeliveryInHours?: Maybe<Scalars['String']>;
  exchangeRate: Scalars['Float'];
  externalId?: Maybe<Scalars['String']>;
  iconUrl: Scalars['String'];
  id: Scalars['ID'];
  item: Item;
  itemId: Scalars['ID'];
  marketId: Scalars['ID'];
  markup: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  obtainable: Scalars['Boolean'];
  purchasable: ItemPurchasable;
  purchaseUrl?: Maybe<Scalars['String']>;
  rarity?: Maybe<Scalars['String']>;
  releasedAt?: Maybe<Scalars['SequelizeDate']>;
  /** @deprecated Use retailerId */
  retailer?: Maybe<Scalars['String']>;
  retailerId?: Maybe<Scalars['ID']>;
  retailerObject?: Maybe<RetailerType>;
  shippingCost?: Maybe<Scalars['Float']>;
  shippingInfo?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  totalAvailable?: Maybe<Scalars['Int']>;
  totalFulfilled?: Maybe<Scalars['Int']>;
  totalRequested?: Maybe<Scalars['Int']>;
  totalUnfulfilled?: Maybe<Scalars['Int']>;
  type?: Maybe<ItemType>;
  updatedAt: Scalars['SequelizeDate'];
  usable: Scalars['Boolean'];
  value: Scalars['Float'];
  withdrawable: Scalars['Boolean'];
};

export enum ItemVariantApprovalStrategy {
  Auto = 'AUTO',
  Manual = 'MANUAL'
}

export type ItemVariantConnection = {
  __typename?: 'ItemVariantConnection';
  edges?: Maybe<Array<Maybe<ItemVariantEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type ItemVariantEdge = {
  __typename?: 'ItemVariantEdge';
  cursor: Scalars['String'];
  node?: Maybe<ItemVariant>;
};

export enum ItemVariantOrderBy {
  AvailableAssets = 'AVAILABLE_ASSETS',
  AvailableAssetsDesc = 'AVAILABLE_ASSETS_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DisplayValue = 'DISPLAY_VALUE',
  DisplayValueDesc = 'DISPLAY_VALUE_DESC',
  HasAvailableAssets = 'HAS_AVAILABLE_ASSETS',
  HasAvailableAssetsDesc = 'HAS_AVAILABLE_ASSETS_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  ReleasedAt = 'RELEASED_AT',
  ReleasedAtDesc = 'RELEASED_AT_DESC',
  Size = 'SIZE',
  SizeDesc = 'SIZE_DESC',
  TotalRequested = 'TOTAL_REQUESTED',
  TotalRequestedDesc = 'TOTAL_REQUESTED_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  Value = 'VALUE',
  ValueDesc = 'VALUE_DESC'
}

export type ItemVariantSize = {
  __typename?: 'ItemVariantSize';
  categoryId?: Maybe<Scalars['ID']>;
  size?: Maybe<Scalars['String']>;
};

export enum ItemVariantSizeOrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Jackpot = Node & {
  __typename?: 'Jackpot';
  chance: Scalars['Float'];
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  gameWageringRequirements: Array<GameWageringRequirement>;
  id: Scalars['ID'];
  initialValue: Scalars['Float'];
  jackpotWinningTickets: Array<Maybe<JackpotWinningTicket>>;
  payoutConfig?: Maybe<JackpotPayoutConfig>;
  payoutType: JackpotPayoutType;
  scheduledAt?: Maybe<Scalars['SequelizeDate']>;
  ticketsInfo?: Maybe<JackpotTicketsInfo>;
  totalTickets: Scalars['Int'];
  totalValue: Scalars['Float'];
  updatedAt: Scalars['SequelizeDate'];
  userRequirements?: Maybe<UserRequirements>;
  value: Scalars['Float'];
  wager: Scalars['Float'];
  winnerCount: Scalars['Int'];
  wishlistTicketAmount?: Maybe<Array<JackpotWishlistTicketAmount>>;
  won: Scalars['Boolean'];
};

export type JackpotConnection = {
  __typename?: 'JackpotConnection';
  edges?: Maybe<Array<Maybe<JackpotEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type JackpotEdge = {
  __typename?: 'JackpotEdge';
  cursor: Scalars['String'];
  node?: Maybe<Jackpot>;
};

export type JackpotLeaderboardConnection = {
  __typename?: 'JackpotLeaderboardConnection';
  edges: Array<JackpotLeaderboardEdge>;
  pageInfo: PageInfo;
};

export type JackpotLeaderboardEdge = {
  __typename?: 'JackpotLeaderboardEdge';
  cursor: Scalars['String'];
  node?: Maybe<JackpotLeaderboardElement>;
};

export type JackpotLeaderboardElement = Node & {
  __typename?: 'JackpotLeaderboardElement';
  id: Scalars['ID'];
  totalTickets: Scalars['Int'];
  totalValue: Scalars['Float'];
  user: User;
  userId: Scalars['ID'];
};

export enum JackpotOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Value = 'VALUE',
  ValueDesc = 'VALUE_DESC'
}

export type JackpotPayoutConfig = {
  __typename?: 'JackpotPayoutConfig';
  nextPosition?: Maybe<JackpotPayoutPosition>;
  positions: Array<JackpotPayoutPosition>;
};

export type JackpotPayoutConfigInput = {
  positions: Array<JackpotPayoutPositionInput>;
};

export type JackpotPayoutPosition = {
  __typename?: 'JackpotPayoutPosition';
  balance?: Maybe<Scalars['Float']>;
  itemVariant?: Maybe<ItemVariant>;
  itemVariantId?: Maybe<Scalars['ID']>;
  percentage?: Maybe<Scalars['Float']>;
  scheduledAt?: Maybe<Scalars['SequelizeDate']>;
  totalValue: Scalars['Float'];
  walletType?: Maybe<WalletType>;
};

export type JackpotPayoutPositionInput = {
  balance?: InputMaybe<Scalars['Float']>;
  itemVariantId?: InputMaybe<Scalars['ID']>;
  percentage?: InputMaybe<Scalars['Float']>;
  scheduledAt?: InputMaybe<Scalars['SequelizeDate']>;
  walletType?: InputMaybe<WalletType>;
};

export enum JackpotPayoutType {
  Regular = 'REGULAR',
  Wishlist = 'WISHLIST'
}

export type JackpotTicketsInfo = {
  __typename?: 'JackpotTicketsInfo';
  maxId?: Maybe<Scalars['Int']>;
  minId?: Maybe<Scalars['Int']>;
};

export type JackpotWinningTicket = Node & {
  __typename?: 'JackpotWinningTicket';
  balance?: Maybe<Scalars['Float']>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  id: Scalars['ID'];
  /** @deprecated Use itemVariants instead */
  itemVariant?: Maybe<ItemVariant>;
  itemVariantId?: Maybe<Scalars['ID']>;
  itemVariantIds?: Maybe<Array<Scalars['ID']>>;
  itemVariants?: Maybe<Array<ItemVariant>>;
  jackpot: Jackpot;
  jackpotId: Scalars['ID'];
  position?: Maybe<Scalars['Int']>;
  ticket: Ticket;
  ticketId: Scalars['ID'];
  totalValue: Scalars['Float'];
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  /** @deprecated Use userItems instead */
  userItem?: Maybe<UserItem>;
  userItemId?: Maybe<Scalars['ID']>;
  userItemIds?: Maybe<Array<Scalars['ID']>>;
  userItems?: Maybe<Array<UserItem>>;
  walletType?: Maybe<WalletType>;
};

export type JackpotWinningTicketConnection = {
  __typename?: 'JackpotWinningTicketConnection';
  edges?: Maybe<Array<Maybe<JackpotWinningTicketEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type JackpotWinningTicketEdge = {
  __typename?: 'JackpotWinningTicketEdge';
  cursor: Scalars['String'];
  node?: Maybe<JackpotWinningTicket>;
};

export enum JackpotWinningTicketOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type JackpotWinningTicketSubscriptionPayload = {
  __typename?: 'JackpotWinningTicketSubscriptionPayload';
  jackpotWinningTicket: JackpotWinningTicket;
};

export type JackpotWinningTicketsStats = {
  __typename?: 'JackpotWinningTicketsStats';
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  totalUserItemAcquiredValue?: Maybe<Scalars['Float']>;
};

export type JackpotWishlistTicketAmount = {
  __typename?: 'JackpotWishlistTicketAmount';
  amount: Scalars['Int'];
  maxLevel: Scalars['Int'];
  minLevel: Scalars['Int'];
};

export type JackpotWishlistTicketAmountInput = {
  amount: Scalars['Int'];
  maxLevel: Scalars['Int'];
  minLevel: Scalars['Int'];
};

export type JoinGiveawayInput = {
  giveawayId: Scalars['ID'];
  recaptcha: Scalars['String'];
  visualRecaptcha?: InputMaybe<Scalars['String']>;
};

export type JoinPvpGameInput = {
  pvpGameId: Scalars['ID'];
  selection?: InputMaybe<Scalars['Int']>;
  teamSelection?: InputMaybe<Scalars['Int']>;
};

export type JoinPvpGamePayload = {
  __typename?: 'JoinPvpGamePayload';
  pvpBet?: Maybe<PvpBet>;
  pvpBets?: Maybe<Array<PvpBet>>;
  pvpGame: PvpGame;
  pvpRound?: Maybe<PvpRound>;
  pvpRounds?: Maybe<Array<PvpRound>>;
};

export type JoinTradesInput = {
  recaptcha: Scalars['String'];
  tradeIds: Array<Scalars['ID']>;
  visualRecaptcha?: InputMaybe<Scalars['String']>;
};

export type JoinTradesPayload = {
  __typename?: 'JoinTradesPayload';
  trades: Array<Maybe<Trade>>;
};

export type Language = {
  __typename?: 'Language';
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
};

export type LifeTimeCash = {
  __typename?: 'LifeTimeCash';
  claimable?: Maybe<Scalars['Float']>;
  claimed?: Maybe<Scalars['Float']>;
  dailyLimit?: Maybe<Scalars['Float']>;
  unclaimed?: Maybe<Scalars['Float']>;
};

export type Location = {
  __typename?: 'Location';
  asn: Asn;
  callingCode?: Maybe<Scalars['String']>;
  carrier?: Maybe<Carrier>;
  city?: Maybe<Scalars['String']>;
  continentCode?: Maybe<Scalars['String']>;
  continentName?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  countryName?: Maybe<Scalars['String']>;
  currency?: Maybe<Currency>;
  emojiFlag?: Maybe<Scalars['String']>;
  emojiUnicode?: Maybe<Scalars['String']>;
  flag?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  isBlocked?: Maybe<Scalars['Boolean']>;
  isEu?: Maybe<Scalars['Boolean']>;
  languages?: Maybe<Array<Maybe<Language>>>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['String']>;
  postal?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  regionCode?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  threat?: Maybe<Threat>;
  timeZone?: Maybe<TimeZone>;
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  user?: Maybe<User>;
};

export type LuckiestBoxOpening = {
  __typename?: 'LuckiestBoxOpening';
  boxOpening?: Maybe<BoxOpening>;
  totalOpenings: Scalars['Int'];
};

export type MarkNotificationMessagesAsReadInput = {
  ids: Array<Scalars['ID']>;
};

export type MarkNotificationMessagesAsReadPayload = {
  __typename?: 'MarkNotificationMessagesAsReadPayload';
  updatedCount: Scalars['Int'];
};

export type MarkNotificationsAsReadInput = {
  ids: Array<Scalars['ID']>;
};

export type MarkNotificationsAsReadPayload = {
  __typename?: 'MarkNotificationsAsReadPayload';
  updatedCount: Scalars['Int'];
};

export type Market = Node & {
  __typename?: 'Market';
  boxesCount?: Maybe<Scalars['Int']>;
  countries?: Maybe<Array<Maybe<Country>>>;
  crashSummary?: Maybe<MarketGameSummary>;
  createdAt?: Maybe<Scalars['SequelizeDate']>;
  currency: Scalars['String'];
  diceSummary?: Maybe<MarketGameSummary>;
  id: Scalars['ID'];
  itemsCount?: Maybe<Scalars['Int']>;
  latestTosVersion: Scalars['Int'];
  matchBettingSummary?: Maybe<MarketGameSummary>;
  name?: Maybe<Scalars['String']>;
  pvpSummary?: Maybe<MarketGameSummary>;
  rouletteSummary?: Maybe<MarketGameSummary>;
  shippableCountries?: Maybe<Array<Maybe<Country>>>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['SequelizeDate']>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type MarketCrashSummaryArgs = {
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type MarketDiceSummaryArgs = {
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type MarketMatchBettingSummaryArgs = {
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type MarketPvpSummaryArgs = {
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type MarketRouletteSummaryArgs = {
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};

export type MarketConnection = {
  __typename?: 'MarketConnection';
  edges?: Maybe<Array<Maybe<MarketEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type MarketEdge = {
  __typename?: 'MarketEdge';
  cursor: Scalars['String'];
  node?: Maybe<Market>;
};

export type MarketGameSummary = {
  __typename?: 'MarketGameSummary';
  amount?: Maybe<Scalars['Float']>;
  players?: Maybe<Scalars['Int']>;
  profit?: Maybe<Scalars['Float']>;
};

export enum MarketOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Name = 'NAME'
}

export type MatchBettingGame = Node & {
  __typename?: 'MatchBettingGame';
  beginAt?: Maybe<Scalars['SequelizeDate']>;
  complete?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['SequelizeDate'];
  draw: Scalars['Boolean'];
  endAt?: Maybe<Scalars['SequelizeDate']>;
  externalId?: Maybe<Scalars['String']>;
  finished: Scalars['Boolean'];
  forfeit: Scalars['Boolean'];
  id: Scalars['ID'];
  length?: Maybe<Scalars['Int']>;
  markets: MatchBettingMarketConnection;
  match: MatchBettingMatch;
  matchId: Scalars['ID'];
  meta?: Maybe<MatchBettingGameMeta>;
  position: Scalars['Int'];
  provider: MatchBettingProvider;
  status: MatchBettingGameStatus;
  updatedAt: Scalars['SequelizeDate'];
  videoGame: MatchBettingVideoGame;
  /** @deprecated Use 'streams' on match relation */
  videoUrl?: Maybe<Scalars['String']>;
  winnerPlayer?: Maybe<MatchBettingPlayer>;
  winnerPlayerId?: Maybe<Scalars['ID']>;
  winnerTeam?: Maybe<MatchBettingTeam>;
  winnerTeamId?: Maybe<Scalars['ID']>;
  winnerType?: Maybe<MatchBettingOpponentType>;
};


export type MatchBettingGameMarketsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  marketIds?: InputMaybe<Array<Scalars['ID']>>;
  statuses?: InputMaybe<Array<MatchBettingMarketStatus>>;
  types?: InputMaybe<Array<MatchBettingMarketType>>;
};

export type MatchBettingGameConnection = {
  __typename?: 'MatchBettingGameConnection';
  edges?: Maybe<Array<Maybe<MatchBettingGameEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type MatchBettingGameEdge = {
  __typename?: 'MatchBettingGameEdge';
  cursor: Scalars['String'];
  node?: Maybe<MatchBettingGame>;
};

export type MatchBettingGameMeta = {
  __typename?: 'MatchBettingGameMeta';
  mapName?: Maybe<Scalars['String']>;
};

export enum MatchBettingGameOrderBy {
  BeginAt = 'BEGIN_AT',
  BeginAtDesc = 'BEGIN_AT_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Position = 'POSITION',
  PositionDesc = 'POSITION_DESC'
}

export enum MatchBettingGameStatus {
  Finished = 'FINISHED',
  NotPlayed = 'NOT_PLAYED',
  NotStarted = 'NOT_STARTED',
  Running = 'RUNNING'
}

export type MatchBettingHeartBeat = {
  __typename?: 'MatchBettingHeartBeat';
  at: Scalars['SequelizeDate'];
  provider: MatchBettingProvider;
};

export type MatchBettingLeague = Node & {
  __typename?: 'MatchBettingLeague';
  createdAt: Scalars['SequelizeDate'];
  externalId?: Maybe<Scalars['String']>;
  externalModifiedAt?: Maybe<Scalars['SequelizeDate']>;
  externalSlug?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  provider: MatchBettingProvider;
  updatedAt: Scalars['SequelizeDate'];
  url?: Maybe<Scalars['String']>;
  videoGame: MatchBettingVideoGame;
};

export type MatchBettingLeagueConnection = {
  __typename?: 'MatchBettingLeagueConnection';
  edges?: Maybe<Array<Maybe<MatchBettingLeagueEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type MatchBettingLeagueEdge = {
  __typename?: 'MatchBettingLeagueEdge';
  cursor: Scalars['String'];
  node?: Maybe<MatchBettingLeague>;
};

export enum MatchBettingLeagueOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type MatchBettingMarket = Node & {
  __typename?: 'MatchBettingMarket';
  createdAt: Scalars['SequelizeDate'];
  externalId?: Maybe<Scalars['String']>;
  game?: Maybe<MatchBettingGame>;
  gameId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  lastRollbackAt?: Maybe<Scalars['SequelizeDate']>;
  match: MatchBettingMatch;
  matchId: Scalars['ID'];
  name: Scalars['String'];
  participantPlayer?: Maybe<MatchBettingPlayer>;
  participantPlayerId?: Maybe<Scalars['ID']>;
  participantTeam?: Maybe<MatchBettingTeam>;
  participantTeamId?: Maybe<Scalars['ID']>;
  participantType?: Maybe<MatchBettingOpponentType>;
  provider: MatchBettingProvider;
  selections: Array<MatchBettingMarketSelection>;
  status: MatchBettingMarketStatus;
  template: Scalars['String'];
  type: MatchBettingMarketType;
  updatedAt: Scalars['SequelizeDate'];
  videoGame: MatchBettingVideoGame;
};

export type MatchBettingMarketConnection = {
  __typename?: 'MatchBettingMarketConnection';
  edges?: Maybe<Array<Maybe<MatchBettingMarketEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type MatchBettingMarketEdge = {
  __typename?: 'MatchBettingMarketEdge';
  cursor: Scalars['String'];
  node?: Maybe<MatchBettingMarket>;
};

export type MatchBettingMarketOddsUpdate = {
  __typename?: 'MatchBettingMarketOddsUpdate';
  gameId?: Maybe<Scalars['ID']>;
  marketId: Scalars['ID'];
  matchId: Scalars['ID'];
  selections: Array<MatchBettingMarketOddsUpdateSelection>;
  status: MatchBettingMarketStatus;
};

export type MatchBettingMarketOddsUpdatePayload = {
  __typename?: 'MatchBettingMarketOddsUpdatePayload';
  matchBettingMarketOddsUpdate: MatchBettingMarketOddsUpdate;
};

export type MatchBettingMarketOddsUpdateSelection = {
  __typename?: 'MatchBettingMarketOddsUpdateSelection';
  odds?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Int']>;
  result?: Maybe<MatchBettingMarketSelectionResult>;
};

export enum MatchBettingMarketOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type MatchBettingMarketSelection = {
  __typename?: 'MatchBettingMarketSelection';
  handicap?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  odds?: Maybe<Scalars['Float']>;
  participantPlayer?: Maybe<MatchBettingPlayer>;
  participantPlayerId?: Maybe<Scalars['ID']>;
  participantTeam?: Maybe<MatchBettingTeam>;
  participantTeamId?: Maybe<Scalars['ID']>;
  participantType?: Maybe<MatchBettingOpponentType>;
  position?: Maybe<Scalars['Int']>;
  result?: Maybe<MatchBettingMarketSelectionResult>;
  template: Scalars['String'];
};

export enum MatchBettingMarketSelectionResult {
  Invalid = 'INVALID',
  Lost = 'LOST',
  Won = 'WON'
}

export enum MatchBettingMarketStatus {
  Active = 'ACTIVE',
  Deactivated = 'DEACTIVATED',
  Settled = 'SETTLED',
  Suspended = 'SUSPENDED'
}

export enum MatchBettingMarketType {
  Game = 'GAME',
  Match = 'MATCH'
}

export type MatchBettingMatch = Node & {
  __typename?: 'MatchBettingMatch';
  beginAt?: Maybe<Scalars['SequelizeDate']>;
  betsCount?: Maybe<Scalars['Int']>;
  createdAt: Scalars['SequelizeDate'];
  draw: Scalars['Boolean'];
  endAt?: Maybe<Scalars['SequelizeDate']>;
  externalId?: Maybe<Scalars['String']>;
  externalModifiedAt?: Maybe<Scalars['SequelizeDate']>;
  externalSlug?: Maybe<Scalars['String']>;
  forfeit: Scalars['Boolean'];
  games: MatchBettingGameConnection;
  id: Scalars['ID'];
  league: MatchBettingLeague;
  leagueId: Scalars['ID'];
  liveAvailable: Scalars['Boolean'];
  markets: MatchBettingMarketConnection;
  name: Scalars['String'];
  numberOfGames: Scalars['Int'];
  originalScheduledAt?: Maybe<Scalars['SequelizeDate']>;
  provider: MatchBettingProvider;
  rescheduled: Scalars['Boolean'];
  results: Array<MatchBettingMatchResult>;
  scheduledAt?: Maybe<Scalars['SequelizeDate']>;
  serie: MatchBettingSerie;
  serieId: Scalars['ID'];
  status: MatchBettingMatchStatus;
  streams: Array<MatchBettingMatchStream>;
  totalBet?: Maybe<Scalars['Float']>;
  totalPayout?: Maybe<Scalars['Float']>;
  tournament: MatchBettingTournament;
  tournamentId: Scalars['ID'];
  type: MatchBettingMatchType;
  updatedAt: Scalars['SequelizeDate'];
  videoGame: MatchBettingVideoGame;
  winnerPlayer?: Maybe<MatchBettingPlayer>;
  winnerPlayerId?: Maybe<Scalars['ID']>;
  winnerTeam?: Maybe<MatchBettingTeam>;
  winnerTeamId?: Maybe<Scalars['ID']>;
  winnerType?: Maybe<MatchBettingOpponentType>;
};


export type MatchBettingMatchGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  gameIds?: InputMaybe<Array<Scalars['ID']>>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  statuses?: InputMaybe<Array<MatchBettingGameStatus>>;
};


export type MatchBettingMatchMarketsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  marketIds?: InputMaybe<Array<Scalars['ID']>>;
  statuses?: InputMaybe<Array<MatchBettingMarketStatus>>;
  types?: InputMaybe<Array<MatchBettingMarketType>>;
};

export type MatchBettingMatchConnection = {
  __typename?: 'MatchBettingMatchConnection';
  edges?: Maybe<Array<Maybe<MatchBettingMatchEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type MatchBettingMatchEdge = {
  __typename?: 'MatchBettingMatchEdge';
  cursor: Scalars['String'];
  node?: Maybe<MatchBettingMatch>;
};

export enum MatchBettingMatchOrderBy {
  BeginAt = 'BEGIN_AT',
  BeginAtDesc = 'BEGIN_AT_DESC',
  BetsCount = 'BETS_COUNT',
  BetsCountDesc = 'BETS_COUNT_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  ScheduledAt = 'SCHEDULED_AT',
  ScheduledAtDesc = 'SCHEDULED_AT_DESC',
  TotalBet = 'TOTAL_BET',
  TotalBetDesc = 'TOTAL_BET_DESC',
  TotalProfit = 'TOTAL_PROFIT',
  TotalProfitDesc = 'TOTAL_PROFIT_DESC'
}

export type MatchBettingMatchResult = {
  __typename?: 'MatchBettingMatchResult';
  opponentType: MatchBettingOpponentType;
  player?: Maybe<MatchBettingPlayer>;
  playerId?: Maybe<Scalars['ID']>;
  score: Scalars['Int'];
  team?: Maybe<MatchBettingTeam>;
  teamId?: Maybe<Scalars['ID']>;
};

export enum MatchBettingMatchStatus {
  Cancelled = 'CANCELLED',
  Finished = 'FINISHED',
  Live = 'LIVE',
  NotBooked = 'NOT_BOOKED',
  Pending = 'PENDING',
  Postponed = 'POSTPONED',
  PreMatch = 'PRE_MATCH',
  Settled = 'SETTLED'
}

export type MatchBettingMatchStream = {
  __typename?: 'MatchBettingMatchStream';
  embedUrl?: Maybe<Scalars['String']>;
  language: Scalars['String'];
  main: Scalars['Boolean'];
  official: Scalars['Boolean'];
  rawUrl?: Maybe<Scalars['String']>;
};

export enum MatchBettingMatchType {
  BestOf = 'BEST_OF',
  Custom = 'CUSTOM',
  FirstTo = 'FIRST_TO',
  OwBestOf = 'OW_BEST_OF'
}

export enum MatchBettingOpponentType {
  Player = 'PLAYER',
  Team = 'TEAM'
}

export type MatchBettingPlayer = Node & {
  __typename?: 'MatchBettingPlayer';
  createdAt: Scalars['SequelizeDate'];
  externalId?: Maybe<Scalars['String']>;
  externalSlug?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nationality?: Maybe<Scalars['String']>;
  provider: MatchBettingProvider;
  updatedAt: Scalars['SequelizeDate'];
};

export type MatchBettingPlayerConnection = {
  __typename?: 'MatchBettingPlayerConnection';
  edges?: Maybe<Array<Maybe<MatchBettingPlayerEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type MatchBettingPlayerEdge = {
  __typename?: 'MatchBettingPlayerEdge';
  cursor: Scalars['String'];
  node?: Maybe<MatchBettingPlayer>;
};

export enum MatchBettingPlayerOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum MatchBettingProvider {
  PandaScore = 'PANDA_SCORE'
}

export enum MatchBettingReportStatus {
  Error = 'ERROR',
  Generating = 'GENERATING',
  NothingToReport = 'NOTHING_TO_REPORT'
}

export type MatchBettingSerie = Node & {
  __typename?: 'MatchBettingSerie';
  beginAt: Scalars['SequelizeDate'];
  createdAt: Scalars['SequelizeDate'];
  endAt?: Maybe<Scalars['SequelizeDate']>;
  externalId?: Maybe<Scalars['String']>;
  externalModifiedAt?: Maybe<Scalars['SequelizeDate']>;
  externalSlug?: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
  id: Scalars['ID'];
  league: MatchBettingLeague;
  leagueId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  provider: MatchBettingProvider;
  season?: Maybe<Scalars['String']>;
  /** @deprecated Use 'tier' on tournament relation */
  tier?: Maybe<Scalars['String']>;
  updatedAt: Scalars['SequelizeDate'];
  videoGame: MatchBettingVideoGame;
  winnerPlayer?: Maybe<MatchBettingPlayer>;
  winnerPlayerId?: Maybe<Scalars['ID']>;
  winnerTeam?: Maybe<MatchBettingTeam>;
  winnerTeamId?: Maybe<Scalars['ID']>;
  winnerType?: Maybe<MatchBettingOpponentType>;
  year: Scalars['Int'];
};

export type MatchBettingSerieConnection = {
  __typename?: 'MatchBettingSerieConnection';
  edges?: Maybe<Array<Maybe<MatchBettingSerieEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type MatchBettingSerieEdge = {
  __typename?: 'MatchBettingSerieEdge';
  cursor: Scalars['String'];
  node?: Maybe<MatchBettingSerie>;
};

export enum MatchBettingSerieOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type MatchBettingSlip = Node & {
  __typename?: 'MatchBettingSlip';
  affiliateUserId?: Maybe<Scalars['ID']>;
  bet: Scalars['Float'];
  betItems?: Maybe<Array<MatchBettingSlipBetItem>>;
  betItemsAmount: Scalars['Float'];
  bigWin: Scalars['Boolean'];
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  excluded: Scalars['Boolean'];
  finalOdds: Scalars['Float'];
  finishedAt?: Maybe<Scalars['SequelizeDate']>;
  gameProviderFeePercent?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  payout: Scalars['Float'];
  payoutType: MatchBettingSlipPayoutType;
  provider: MatchBettingProvider;
  rakeback?: Maybe<Scalars['Float']>;
  rollback: Scalars['Boolean'];
  rollbackInfo?: Maybe<MatchBettingSlipRollbackInfo>;
  selections: Array<MatchBettingSlipSelection>;
  status: MatchBettingSlipStatus;
  ticketsWon: Scalars['Int'];
  totalBet: Scalars['Float'];
  type: MatchBettingSlipType;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  winRemainder?: Maybe<Scalars['Float']>;
  winUserItem?: Maybe<UserItem>;
  winUserItemId?: Maybe<Scalars['ID']>;
  winUserItemValue?: Maybe<Scalars['Float']>;
};

export type MatchBettingSlipBetItem = {
  __typename?: 'MatchBettingSlipBetItem';
  currency: Scalars['String'];
  itemVariant: ItemVariant;
  itemVariantId: Scalars['ID'];
  userItem: UserItem;
  userItemId: Scalars['ID'];
  value: Scalars['Float'];
};

export type MatchBettingSlipConnection = {
  __typename?: 'MatchBettingSlipConnection';
  edges?: Maybe<Array<Maybe<MatchBettingSlipEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type MatchBettingSlipEdge = {
  __typename?: 'MatchBettingSlipEdge';
  cursor: Scalars['String'];
  node?: Maybe<MatchBettingSlip>;
};

export enum MatchBettingSlipOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  PayoutBase = 'PAYOUT_BASE',
  PayoutBaseDesc = 'PAYOUT_BASE_DESC',
  TotalBetBase = 'TOTAL_BET_BASE',
  TotalBetBaseDesc = 'TOTAL_BET_BASE_DESC'
}

export enum MatchBettingSlipPayoutType {
  CoinsOnly = 'COINS_ONLY',
  ItemsAndCoins = 'ITEMS_AND_COINS'
}

export type MatchBettingSlipRollbackInfo = {
  __typename?: 'MatchBettingSlipRollbackInfo';
  bigWin: Scalars['Boolean'];
  finishedAt?: Maybe<Scalars['SequelizeDate']>;
  status: MatchBettingSlipStatus;
  winRemainder?: Maybe<Scalars['Float']>;
  winUserItem?: Maybe<UserItem>;
  winUserItemId?: Maybe<Scalars['ID']>;
  winUserItemValue?: Maybe<Scalars['Float']>;
};

export type MatchBettingSlipSelection = {
  __typename?: 'MatchBettingSlipSelection';
  externalMarketId?: Maybe<Scalars['String']>;
  game?: Maybe<MatchBettingGame>;
  gameId?: Maybe<Scalars['ID']>;
  handicap?: Maybe<Scalars['Float']>;
  market: MatchBettingMarket;
  marketId: Scalars['ID'];
  marketName: Scalars['String'];
  marketSelectionName: Scalars['String'];
  marketSelectionPosition?: Maybe<Scalars['Int']>;
  match: MatchBettingMatch;
  matchId: Scalars['ID'];
  matchName: Scalars['String'];
  odds: Scalars['Float'];
  probabilityWithMargin?: Maybe<Scalars['Float']>;
  result?: Maybe<MatchBettingMarketSelectionResult>;
  tournament: MatchBettingTournament;
  tournamentId: Scalars['ID'];
  tournamentName: Scalars['String'];
};

export type MatchBettingSlipSelectionInput = {
  marketId: Scalars['ID'];
  odds: Scalars['Float'];
  position: Scalars['Int'];
};

export type MatchBettingSlipStats = {
  __typename?: 'MatchBettingSlipStats';
  activeCount?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  rollbackCount?: Maybe<Scalars['Int']>;
  totalActiveBet?: Maybe<Scalars['Float']>;
  totalActivePayout?: Maybe<Scalars['Float']>;
  totalBet?: Maybe<Scalars['Float']>;
  totalPayout?: Maybe<Scalars['Float']>;
  totalRollbackBet?: Maybe<Scalars['Float']>;
  totalRollbackPayout?: Maybe<Scalars['Float']>;
  videoGames?: Maybe<Array<VideoGameMatchBettingSlipStats>>;
};

export enum MatchBettingSlipStatus {
  Active = 'ACTIVE',
  Lost = 'LOST',
  Refunded = 'REFUNDED',
  Rollback = 'ROLLBACK',
  Won = 'WON'
}

export enum MatchBettingSlipType {
  Multiple = 'MULTIPLE',
  Single = 'SINGLE'
}

export type MatchBettingTeam = Node & {
  __typename?: 'MatchBettingTeam';
  acronym?: Maybe<Scalars['String']>;
  createdAt: Scalars['SequelizeDate'];
  externalId?: Maybe<Scalars['String']>;
  externalModifiedAt?: Maybe<Scalars['SequelizeDate']>;
  externalSlug?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  provider: MatchBettingProvider;
  updatedAt: Scalars['SequelizeDate'];
};

export type MatchBettingTeamConnection = {
  __typename?: 'MatchBettingTeamConnection';
  edges?: Maybe<Array<Maybe<MatchBettingTeamEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type MatchBettingTeamEdge = {
  __typename?: 'MatchBettingTeamEdge';
  cursor: Scalars['String'];
  node?: Maybe<MatchBettingTeam>;
};

export enum MatchBettingTeamOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type MatchBettingTournament = Node & {
  __typename?: 'MatchBettingTournament';
  beginAt?: Maybe<Scalars['SequelizeDate']>;
  createdAt: Scalars['SequelizeDate'];
  endAt?: Maybe<Scalars['SequelizeDate']>;
  externalId?: Maybe<Scalars['String']>;
  externalModifiedAt?: Maybe<Scalars['SequelizeDate']>;
  externalSlug?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  league: MatchBettingLeague;
  leagueId: Scalars['ID'];
  liveAvailable: Scalars['Boolean'];
  name: Scalars['String'];
  provider: MatchBettingProvider;
  serie: MatchBettingSerie;
  serieId: Scalars['ID'];
  tier?: Maybe<Scalars['String']>;
  updatedAt: Scalars['SequelizeDate'];
  videoGame: MatchBettingVideoGame;
  winnerPlayer?: Maybe<MatchBettingPlayer>;
  winnerPlayerId?: Maybe<Scalars['ID']>;
  winnerTeam?: Maybe<MatchBettingTeam>;
  winnerTeamId?: Maybe<Scalars['ID']>;
  winnerType?: Maybe<MatchBettingOpponentType>;
};

export type MatchBettingTournamentConnection = {
  __typename?: 'MatchBettingTournamentConnection';
  edges?: Maybe<Array<Maybe<MatchBettingTournamentEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type MatchBettingTournamentEdge = {
  __typename?: 'MatchBettingTournamentEdge';
  cursor: Scalars['String'];
  node?: Maybe<MatchBettingTournament>;
};

export enum MatchBettingTournamentOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type MatchBettingUpdateHeartBeatSubscriptionPayload = {
  __typename?: 'MatchBettingUpdateHeartBeatSubscriptionPayload';
  matchBettingHeartBeat: MatchBettingHeartBeat;
};

export enum MatchBettingVideoGame {
  CallOfDuty = 'CALL_OF_DUTY',
  Csgo = 'CSGO',
  Dota2 = 'DOTA2',
  Fifa = 'FIFA',
  KingOfGlory = 'KING_OF_GLORY',
  Lol = 'LOL',
  LolWildRift = 'LOL_WILD_RIFT',
  Overwatch = 'OVERWATCH',
  Pubg = 'PUBG',
  RainbowSixSiege = 'RAINBOW_SIX_SIEGE',
  RocketLeague = 'ROCKET_LEAGUE',
  StarCraft_2 = 'STAR_CRAFT_2',
  StarCraftBroodWar = 'STAR_CRAFT_BROOD_WAR',
  Valorant = 'VALORANT'
}

export type Message = Node & {
  __typename?: 'Message';
  body?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  meta?: Maybe<Scalars['JSON']>;
  /** @deprecated Temporary while FE is being updated to change meta type */
  meta2?: Maybe<MessageMeta>;
  type?: Maybe<MessageType>;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export enum MessageChannel {
  De = 'DE',
  En = 'EN',
  HighRoller = 'HIGH_ROLLER',
  Pt = 'PT',
  Sv = 'SV',
}

export type MessageConnection = {
  __typename?: 'MessageConnection';
  edges?: Maybe<Array<Maybe<MessageEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type MessageEdge = {
  __typename?: 'MessageEdge';
  cursor: Scalars['String'];
  node?: Maybe<Message>;
};

export type MessageMeta = {
  __typename?: 'MessageMeta';
  boxOpening?: Maybe<BoxOpening>;
  boxOpeningId?: Maybe<Scalars['ID']>;
  currency?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['Int']>;
  externalIdFull?: Maybe<Scalars['ID']>;
  externalModel?: Maybe<Scalars['String']>;
  gemstoneBoostActivation?: Maybe<GemstoneBoostActivation>;
  gemstoneBoostActivationId?: Maybe<Scalars['ID']>;
  giveaway?: Maybe<Giveaway>;
  giveawayId?: Maybe<Scalars['ID']>;
  jackpotWinningTicket?: Maybe<JackpotWinningTicket>;
  jackpotWinningTicketId?: Maybe<Scalars['ID']>;
  matchBettingSlip?: Maybe<MatchBettingSlip>;
  matchBettingSlipId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  payoutCount?: Maybe<Scalars['Int']>;
  totalValue?: Maybe<Scalars['Float']>;
  user?: Maybe<User>;
  userGiveawayIds?: Maybe<Array<Scalars['ID']>>;
  userGiveaways?: Maybe<Array<UserGiveaway>>;
  userId?: Maybe<Scalars['ID']>;
};

export enum MessageOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum MessageType {
  BoxOpening = 'BOX_OPENING',
  GameJackpot_1X = 'GAME_JACKPOT_1X',
  GameJackpot_2X = 'GAME_JACKPOT_2X',
  GameJackpot_3X = 'GAME_JACKPOT_3X',
  GemstoneBoostActivationCreated = 'GEMSTONE_BOOST_ACTIVATION_CREATED',
  /** @deprecated Use more general BOX_OPENING instead */
  GemstoneBoxWin = 'GEMSTONE_BOX_WIN',
  GiveawayCompleted = 'GIVEAWAY_COMPLETED',
  GiveawayCreated = 'GIVEAWAY_CREATED',
  GiveawayStarted = 'GIVEAWAY_STARTED',
  GiveawayWin = 'GIVEAWAY_WIN',
  JackpotTicketWin = 'JACKPOT_TICKET_WIN',
  MatchBettingSlipBigWin = 'MATCH_BETTING_SLIP_BIG_WIN',
  PvpBoxGameBigWin = 'PVP_BOX_GAME_BIG_WIN'
}

export type MigrateTransactionsInput = {
  secret?: InputMaybe<Scalars['String']>;
};

export type MigrateTransactionsPayload = {
  __typename?: 'MigrateTransactionsPayload';
  success: Scalars['Boolean'];
};

export type MoveBetweenWalletsInput = {
  fromWalletType: WalletType;
  toCurrency?: InputMaybe<Scalars['String']>;
  toWalletType: WalletType;
};

export type MoveBetweenWalletsPayload = {
  __typename?: 'MoveBetweenWalletsPayload';
  errorCount: Scalars['Int'];
  walletIds: Array<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  abortZincOrder?: Maybe<AbortZincOrderPayload>;
  acceptTos?: Maybe<AcceptTosPayload>;
  addCasinoGameProviderGames?: Maybe<AddCasinoGameProviderGamesPayload>;
  addEmailToWaitingList?: Maybe<EmailWaitingListPayload>;
  addRefreshBoxOpeningStreamTasks: AddRefreshBoxOpeningStreamTasks;
  addSyncItemPricesTasks?: Maybe<AddSyncItemPricesTasksPayload>;
  addUpdateItemVariantsTask?: Maybe<AddUpdateItemVariantsTaskInputPayload>;
  announceGiveaway?: Maybe<AnnounceGiveawayPayload>;
  approveWithdrawalTransaction?: Maybe<ApproveWithdrawalTransactionPayload>;
  autoJoinTrade?: Maybe<AutoJoinTradePayload>;
  banSteamBotAssets?: Maybe<BanSteamBotAssetsPayload>;
  callPvpBot?: Maybe<CallPvpBotPayload>;
  callPvpBotForRematch?: Maybe<CallPvpBotForRematchPayload>;
  cancelAffiliateLoan: CreateLoanRequestPayload;
  cancelTrade?: Maybe<CancelTradePayload>;
  cancelZbtTrade?: Maybe<CancelZbtTradePayload>;
  cancelZincOrder?: Maybe<CancelZincOrderPayload>;
  changeSeed?: Maybe<ChangeSeedPayload>;
  checkSteamBotActivity: CheckSteamBotActivityPlayload;
  checkUserItemStatus?: Maybe<CheckUserItemStatusPayload>;
  claimAdditionalRewardsWallet?: Maybe<AdditionalRewardClaimPayload>;
  claimAffiliateWallet?: Maybe<UpdateWalletPayload>;
  claimRakeback?: Maybe<RakebackClaimPayload>;
  claimUserAchievement?: Maybe<ClaimUserAchievementPayload>;
  claimUserTierAsset?: Maybe<UserAsset>;
  cleanAffiliatePromoImages?: Maybe<AffiliateUrlsPayload>;
  cleanUpCooldownTrades?: Maybe<CleanUpCooldownTradesPayload>;
  cleanUpStalePvpGames?: Maybe<CleanUpStalePvpGamesPayload>;
  cleanUpTrades?: Maybe<CleanUpTradesPayload>;
  cloneItem?: Maybe<CloneItemPayload>;
  cloneMarket?: Maybe<CloneMarketPayload>;
  completeGameJackpot: CompleteGameJackpotPayload;
  completeJackpot?: Maybe<CompleteJackpotPayload>;
  completeMatchBettingSlip?: Maybe<CompleteMatchBettingSlipPayload>;
  completeTrade?: Maybe<CompleteTradePayload>;
  consolidateWallets?: Maybe<ConsolidateWalletsPayload>;
  createAchievement: CreateAchievementPayload;
  createAffiliatePromoCode: CreateAffiliatePromoCodePayload;
  createAffiliatePromoImage?: Maybe<AffiliateUrlPayload>;
  createAffiliateReports?: Maybe<CreateAffiliateReportsJobPayload>;
  createAffiliateTier: AffiliateTierPayload;
  createAsset?: Maybe<Asset>;
  createBet?: Maybe<CreateBetPayload>;
  createBox?: Maybe<CreateBoxPayload>;
  createCalendar?: Maybe<CreateCalendarPayload>;
  createCalendarEntry?: Maybe<CreateCalendarEntryPayload>;
  createCasinoGame?: Maybe<CasinoGame>;
  createCasinoGameLobby?: Maybe<CreateCasinoGameLobbyPayload>;
  createCasinoGameProvider?: Maybe<CasinoGameProvider>;
  createCasinoGameProviderConfig?: Maybe<CasinoGameProviderConfig>;
  createCrashBet?: Maybe<CreateCrashBetPayload>;
  createCronJob?: Maybe<CreateCronJobPayload>;
  createCryptoAddress: CryptoAddressPayload;
  createDiceBets?: Maybe<CreateDiceBetsPayload>;
  createDigitalCodes?: Maybe<CreateDigitalCodePayload>;
  createDocument?: Maybe<CreateDocumentPayload>;
  createEmail?: Maybe<CreateEmailPayload>;
  createExchange?: Maybe<CreateExchangePayload>;
  createGameMessage?: Maybe<CreateGameMessagePayload>;
  createGemstoneBoost: CreateGemstoneBoostPayload;
  createGiftCardOption?: Maybe<CreateGiftCardOptionPayload>;
  createGiftCardPromoCodes: CreatePromoCodesPayload;
  createGiveaway?: Maybe<CreateGiveawayPayload>;
  createInviteCode?: Maybe<CreateInviteCodePayload>;
  createItem?: Maybe<CreateItemPayload>;
  createItemCategory?: Maybe<CreateCategoryPayload>;
  createItemVariant?: Maybe<CreateItemVariantPayload>;
  createItems?: Maybe<CreateItemsPayload>;
  createJackpot?: Maybe<CreateJackpotPayload>;
  createMarket?: Maybe<CreateMarketPayload>;
  createMatchBettingMatchesFromProvider?: Maybe<CreateMatchBettingMatchFromProviderPayload>;
  createMatchBettingSlip?: Maybe<CreateMatchBettingSlipPayload>;
  createMessage?: Maybe<CreateMessagePayload>;
  createNote?: Maybe<CreateNotePayload>;
  createNotificationMessage?: Maybe<CreateNotificationMessagePayload>;
  createOrder?: Maybe<CreateOrderPayload>;
  createOrderNote?: Maybe<CreateOrderNotePayload>;
  createPaymentOption: CreatePaymentOptionPayload;
  /** @deprecated Use 'createPlinkoBets' instead */
  createPlinkoBet?: Maybe<CreatePlinkoBetPayload>;
  createPlinkoBets?: Maybe<CreatePlinkoBetsPayload>;
  createPoll?: Maybe<CreatePollPayload>;
  createPromoCodes: CreatePromoCodesPayload;
  createProxy?: Maybe<CreateProxyPayload>;
  createPvpBot?: Maybe<CreatePvpBotPayload>;
  createPvpGame?: Maybe<CreatePvpGamePayload>;
  createPvpGameMessage?: Maybe<CreatePvpGameMessagePayload>;
  createPvpRound?: Maybe<CreatePvpRoundPayload>;
  createRankUpGame?: Maybe<RankUpGame>;
  createRetailer: RetailerPayload;
  createSocialStory: CreateSocialStoryPayload;
  createSteamBot: CreateSteamBotPayload;
  createSteamBots: CreateSteamBotsPayload;
  createSteamOffers: CreateSteamOffersPayload;
  createSupportTicket?: Maybe<CreateSupportTicketPayload>;
  createTag?: Maybe<CreateTagPayload>;
  createTickets?: Maybe<CreateTicketsPayload>;
  createTileSetting: TileSettingPayload;
  /** @deprecated Use createTrades mutation instead */
  createTrade?: Maybe<CreateTradePayload>;
  createTrades?: Maybe<CreateTradesPayload>;
  createTransaction?: Maybe<CreateTransactionPayload>;
  createTrigger?: Maybe<CreateTriggerPayload>;
  createUserAchievement?: Maybe<CreateUserAchievementPayload>;
  createUserAddress: UserAddressPayload;
  createUserCommunication?: Maybe<CreateUserCommunicationPayload>;
  createUserTierAsset?: Maybe<UserTierAsset>;
  createWaxPeerTrade?: Maybe<CreateWaxPeerTradePayload>;
  createWishlist?: Maybe<CreateWishlistPayload>;
  createWithdrawalRequest?: Maybe<CreateWithdrawalRequestPayload>;
  createZbtTrade?: Maybe<CreateZbtTradePayload>;
  createZincOrder?: Maybe<CreateZincOrderPayload>;
  deleteAchievement: DeleteAchievementPayload;
  deleteAffiliateTier: AffiliateTierPayload;
  deleteAsset?: Maybe<Asset>;
  deleteCacheKey?: Maybe<Scalars['Int']>;
  deleteCalendar?: Maybe<DeleteCalendarPayload>;
  deleteCronJob?: Maybe<DeleteCronJobPayload>;
  deleteCryptoAddress: CryptoAddressPayload;
  deleteDigitalCode: DeleteDigitalCodePayload;
  deleteDocument?: Maybe<DeleteDocumentPayload>;
  deleteItemCategory?: Maybe<CreateCategoryPayload>;
  deleteItemVariant?: Maybe<DeleteItemVariantPayload>;
  deleteMarket?: Maybe<DeleteMarketPayload>;
  deleteMessages?: Maybe<DeleteMessagesPayload>;
  deleteOrder?: Maybe<DeleteOrderPayload>;
  deletePaymentOption: DeletePaymentOptionPayload;
  deletePoll?: Maybe<DeletePollPayload>;
  deletePromoCode: PromoCodePayload;
  deleteProxy?: Maybe<DeleteProxyPayload>;
  deleteRetailer: RetailerPayload;
  deleteSocialStory: DeleteSocialStoryPayload;
  deleteSteamBot: DeleteSteamBotPayload;
  deleteSteamOffer?: Maybe<DeleteSteamOfferPayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  deleteTileSetting: TileSettingPayload;
  deleteUserAddress: UserAddressPayload;
  deleteUserCommunication?: Maybe<DeleteUserCommunicationPayload>;
  deleteUserTierAsset?: Maybe<UserTierAsset>;
  disableTotpTwoFactorAuthentication?: Maybe<DisableTotpTwoFactorAuthenticationPayload>;
  emulateCrashGame: EmulateCrashGamePayload;
  emulateGame: EmulateGamePayload;
  enableTotpTwoFactorAuthentication?: Maybe<EnableTotpTwoFactorAuthenticationPayload>;
  exitAllActivePvpGames?: Maybe<ExitAllActivePvpGamesPayload>;
  exitCrash?: Maybe<ExitCrashPayload>;
  exitPvpGame?: Maybe<ExitPvpGamePayload>;
  exportUserPollOptions?: Maybe<ExportUserPollOptionsPayload>;
  finishAllActivePvpGames?: Maybe<FinishAllActivePvpGamesPayload>;
  finishGame?: Maybe<FinishGamePayload>;
  flattenItem?: Maybe<FlattenItemPayload>;
  flushAchievementCache?: Maybe<FlushAchievementCachePayload>;
  flushSettingCache?: Maybe<FlushSettingCachePayload>;
  flushUserAchievementCache?: Maybe<FlushUserAchievementCachePayload>;
  forgotPassword?: Maybe<ForgotPasswordPayload>;
  generateBoxesCsv: GenerateBoxesCsvPayload;
  generateMatchBettingReport?: Maybe<GenerateMatchBettingReportPayload>;
  generateNewTotpTwoFactorBackupCodes: GenerateNewTotpTwoFactorBackupCodesPayload;
  generateTotpTwoFactorAuthenticationSecret?: Maybe<GenerateTotpTwoFactorAuthenticationSecretPayload>;
  generateTradesCsv?: Maybe<GenerateTradesCsvPayload>;
  generateTransactionsCsv?: Maybe<GenerateTransactionsCsvPayload>;
  generateUserDepositWithdrawalCsv?: Maybe<GenerateUserDepositWithdrawalCsvPayload>;
  generateWalletChangesCsv: GenerateWalletChangesCsvPayload;
  increaseWithdrawalRequestAmount?: Maybe<IncreaseWithdrawalRequestPayload>;
  invalidateAllUserSessions?: Maybe<InvalidateAllUserSessionsPayload>;
  joinGiveaway?: Maybe<CreateUserGiveawayPayload>;
  joinPvpGame?: Maybe<JoinPvpGamePayload>;
  joinTrades?: Maybe<JoinTradesPayload>;
  login?: Maybe<LoginPayload>;
  markNotificationMessagesAsRead?: Maybe<MarkNotificationMessagesAsReadPayload>;
  markNotificationsAsRead?: Maybe<MarkNotificationsAsReadPayload>;
  migrateTransactions?: Maybe<MigrateTransactionsPayload>;
  moveBetweenWallets?: Maybe<MoveBetweenWalletsPayload>;
  openBox?: Maybe<CreateBoxOpeningPayload>;
  openTile: OpenTilePayload;
  pauseCronJob?: Maybe<PauseCronJobPayload>;
  payoutJackpot?: Maybe<PayoutJackpotPayload>;
  payoutJackpotTicket?: Maybe<PayoutJackpotTicketPayload>;
  playPvpGame?: Maybe<PlayPvpGamePayload>;
  processMatchBettingMarket?: Maybe<ProcessMatchBettingMarketPayload>;
  processSettledMatchBettingMatch?: Maybe<ProcessSettledMatchBettingMatchPayload>;
  processTrade?: Maybe<ProcessTradePayload>;
  purchaseBox?: Maybe<PurchaseBoxPayload>;
  purchaseXp: PurchaseXpPayload;
  purgeTaskQueue?: Maybe<PurgeTaskQueuePayload>;
  readySteamOffer: ReadySteamOfferPayload;
  recalculateBoxStatistics: RecalculateBoxStatisticsPayload;
  recalculateJackpot?: Maybe<RecalculateJackpotPayload>;
  recalculateJackpotTickets?: Maybe<RecalculateJackpotTicketsPayload>;
  refreshBoxOpeningStream: RefreshBoxOpeningStream;
  refreshBoxes: RefreshBoxesPayload;
  refreshCachedGameBets?: Maybe<RefreshCachedGameBetsPayload>;
  refreshCachedLatestGames?: Maybe<RefreshCachedLatestGamesPayload>;
  refreshDropCacheItems?: Maybe<Scalars['Boolean']>;
  refreshMatchBettingMatchesStats?: Maybe<RefreshMatchBettingMatchesStatsPayload>;
  refreshPlinkoBetSlots?: Maybe<PlinkoBetSlotsPayload>;
  refundStuckPvpGameBets?: Maybe<RefundStuckPvpGameBetsPayload>;
  refundUserBox?: Maybe<RefundUserBoxPayload>;
  requestAffiliateLoan: CreateLoanRequestPayload;
  resetPassword?: Maybe<ResetPasswordPayload>;
  resolveCasinoGameImages?: Maybe<ResolveCasinoGameImagesPayload>;
  respondToAffiliateLoan: UpdateLoanRequestPayload;
  resubscribeUserToAllMarketingEmails?: Maybe<ResubscribeUserToAllMarketingEmailsPayload>;
  resumeCronJob?: Maybe<ResumeCronJobPayload>;
  retrieveTotpTwoFactorBackupCodes?: Maybe<RetrieveTotpTwoFactorBackupCodesPayload>;
  retryZincOrder?: Maybe<RetryZincOrderPayload>;
  revertUser?: Maybe<RevertUserPayload>;
  scheduleSyncForMatchBettingMatches?: Maybe<ScheduleSyncForMatchBettingMatchesPayload>;
  selectPollOptions?: Maybe<SelectPollOptionsPayload>;
  sendOrderDeliveredEmail?: Maybe<SendOrderDeliveredEmailPayload>;
  sendSelfExclusionExpiredEmail?: Maybe<SendSelfExclusionExpiredEmailPayload>;
  sendValidationEmail?: Maybe<SendValidationEmailPayload>;
  setUserAsset?: Maybe<UserAsset>;
  sleepSteamBot: SleepSteamBotPayload;
  startCasinoGameSession?: Maybe<CasinoGameSessionPayload>;
  syncItemPrices?: Maybe<SyncItemPricesPayload>;
  syncMatchBettingMatches?: Maybe<SyncMatchBettingMatchesPayload>;
  syncNewItems?: Maybe<SyncNewItemsPayload>;
  syncUserReports?: Maybe<SyncUserReportsPayload>;
  toggleFavoriteBox: ToggleFavoriteBoxPayload;
  trackTrade?: Maybe<TrackTradePayload>;
  trackWaxPeerTrade?: Maybe<TrackWaxPeerTradePayload>;
  trackZbtTrade?: Maybe<TrackZbtTradePayload>;
  triggerUserAchievement?: Maybe<TriggerUserAchievementPayload>;
  updateAchievement: UpdateAchievementPayload;
  updateAffiliatePromoCode: UpdateAffiliatePromoCodePayload;
  updateAffiliateTier: AffiliateTierPayload;
  updateAvailableAssets?: Maybe<UpdateAvailableAssetsPayload>;
  updateBox?: Maybe<UpdateBoxPayload>;
  updateBoxOrder: UpdateBoxOrderPayload;
  updateCalendar?: Maybe<UpdateCalendarPayload>;
  updateCasinoGame?: Maybe<CasinoGame>;
  updateCasinoGameLobby?: Maybe<UpdateCasinoGameLobbyPayload>;
  updateCasinoGameProvider?: Maybe<CasinoGameProvider>;
  updateCasinoGameProviderConfig?: Maybe<CasinoGameProviderConfig>;
  updateCryptoAddress: CryptoAddressPayload;
  updateDocument?: Maybe<UpdateDocumentPayload>;
  updateExchangeRates?: Maybe<UpdateExchangeRatesPayload>;
  updateGemstoneBoost: UpdateGemstoneBoostPayload;
  updateGiftCardOption?: Maybe<UpdateGiftCardOptionPayload>;
  updateGiveaway?: Maybe<UpdateGiveawayPayload>;
  updateInviteCode?: Maybe<UpdateInviteCodePayload>;
  updateItem?: Maybe<UpdateItemPayload>;
  updateItemCategory?: Maybe<UpdateCategoryPayload>;
  updateItemDisplayValues?: Maybe<UpdateItemDisplayValuesPayload>;
  updateItemExchangeRates?: Maybe<UpdateItemExchangeRatesPayload>;
  updateItemMarkups?: Maybe<UpdateItemMarkupsPayload>;
  updateItemValues?: Maybe<UpdateItemValuesPayload>;
  updateItemVariant?: Maybe<UpdateItemVariantPayload>;
  updateItemVariants?: Maybe<UpdateItemVariantsPayload>;
  updateJackpot?: Maybe<UpdateJackpotPayload>;
  updateMarket?: Maybe<UpdateMarketPayload>;
  updateMatchBettingSlip?: Maybe<UpdateMatchBettingSlipPayload>;
  updateOrder?: Maybe<UpdateOrderPayload>;
  updatePaymentOption: UpdatePaymentOptionPayload;
  updatePoll?: Maybe<UpdatePollPayload>;
  updatePollOption?: Maybe<UpdatePollOptionPayload>;
  updatePollStatus?: Maybe<UpdatePollPayload>;
  updatePromoCode: PromoCodePayload;
  updateProxy?: Maybe<UpdateProxyPayload>;
  updatePvpBot?: Maybe<UpdatePvpBotPayload>;
  updateRetailer: RetailerPayload;
  updateSetting?: Maybe<UpdateSettingPayload>;
  updateSocialStory: UpdateSocialStoryPayload;
  updateSteamBot: UpdateSteamBotPayload;
  updateSteamStatus?: Maybe<UpdateSteamStatusPayload>;
  updateSuspectedTrader?: Maybe<UpdateSuspectedTraderPayload>;
  updateTag?: Maybe<UpdateTagPayload>;
  updateTileSetting: TileSettingPayload;
  updateTradesMarkup?: Maybe<UpdateTradesMarkupPayload>;
  updateTransaction?: Maybe<UpdateTransactionPayload>;
  updateTrigger?: Maybe<UpdateTriggerPayload>;
  updateTriggerStatus?: Maybe<UpdateTriggerPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  updateUserAddress: UserAddressPayload;
  updateUserEmail?: Maybe<UpdateUserEmailPayload>;
  updateUserItem?: Maybe<UpdateUserItemPayload>;
  updateUserItemShipTo?: Maybe<UpdateUserItemPayload>;
  updateUserPreferences?: Maybe<UpdateUserPreferencesPayload>;
  updateUserTier?: Maybe<UserTier>;
  updateUserTierAsset?: Maybe<UserTierAsset>;
  updateWallet?: Maybe<UpdateWalletPayload>;
  updateWishlist?: Maybe<UpdateWishlistPayload>;
  updateWithdrawalRequest?: Maybe<UpdateWithdrawalRequestPayload>;
  usePromoCode: PromoCodePayload;
  verifyEmail?: Maybe<VerifyEmailPayload>;
  wakeUpSteamBot: WakeUpSteamBotPayload;
};


export type MutationAbortZincOrderArgs = {
  input: AbortZincOrderInput;
};


export type MutationAcceptTosArgs = {
  input: AcceptTosInput;
};


export type MutationAddCasinoGameProviderGamesArgs = {
  input: AddCasinoGameProviderGamesInput;
};


export type MutationAddEmailToWaitingListArgs = {
  input: EmailWaitingListInput;
};


export type MutationAddRefreshBoxOpeningStreamTasksArgs = {
  input?: InputMaybe<AddRefreshBoxOpeningStreamTasksInput>;
};


export type MutationAddSyncItemPricesTasksArgs = {
  input: AddSyncItemPricesTasksInput;
};


export type MutationAddUpdateItemVariantsTaskArgs = {
  input: Array<UpdateItemVariantInput>;
};


export type MutationAnnounceGiveawayArgs = {
  input: AnnounceGiveawayInput;
};


export type MutationApproveWithdrawalTransactionArgs = {
  input: ApproveWithdrawalTransactionInput;
};


export type MutationAutoJoinTradeArgs = {
  input: AutoJoinTradeInput;
};


export type MutationBanSteamBotAssetsArgs = {
  input: BanSteamBotAssetsInput;
};


export type MutationCallPvpBotArgs = {
  input: CallPvpBotInput;
};


export type MutationCallPvpBotForRematchArgs = {
  input: CallPvpBotForRematchInput;
};


export type MutationCancelAffiliateLoanArgs = {
  input: AffiliateLoanCancelInput;
};


export type MutationCancelTradeArgs = {
  input: CancelTradeInput;
};


export type MutationCancelZbtTradeArgs = {
  input: CancelZbtTradeInput;
};


export type MutationCancelZincOrderArgs = {
  input: CancelZincOrderInput;
};


export type MutationChangeSeedArgs = {
  input: ChangeSeedInput;
};


export type MutationCheckSteamBotActivityArgs = {
  input: CheckSteamBotActivityInput;
};


export type MutationCheckUserItemStatusArgs = {
  input: CheckUserItemStatusInput;
};


export type MutationClaimAdditionalRewardsWalletArgs = {
  input: AdditionalRewardClaimInput;
};


export type MutationClaimAffiliateWalletArgs = {
  input: AffiliateClaimAmountInput;
};


export type MutationClaimRakebackArgs = {
  input: RakebackClaimInput;
};


export type MutationClaimUserAchievementArgs = {
  input: ClaimUserAchievementInput;
};


export type MutationClaimUserTierAssetArgs = {
  userTierAssetId: Scalars['ID'];
};


export type MutationCleanAffiliatePromoImagesArgs = {
  input: AffiliateSecretInput;
};


export type MutationCleanUpCooldownTradesArgs = {
  input: CleanUpCooldownTradesInput;
};


export type MutationCleanUpStalePvpGamesArgs = {
  input: CleanUpStalePvpGamesInput;
};


export type MutationCleanUpTradesArgs = {
  input: CleanUpTradesInput;
};


export type MutationCloneItemArgs = {
  input: CloneItemInput;
};


export type MutationCloneMarketArgs = {
  id: Scalars['ID'];
  input: CreateUpdateMarketInput;
};


export type MutationCompleteGameJackpotArgs = {
  input: CompleteGameJackpotInput;
};


export type MutationCompleteJackpotArgs = {
  input: CompleteJackpotInput;
};


export type MutationCompleteMatchBettingSlipArgs = {
  input: CompleteMatchBettingSlipInput;
};


export type MutationCompleteTradeArgs = {
  input: CompleteTradeInput;
};


export type MutationConsolidateWalletsArgs = {
  input: ConsolidateWalletsInput;
};


export type MutationCreateAchievementArgs = {
  input: CreateAchievementInput;
};


export type MutationCreateAffiliatePromoCodeArgs = {
  input?: InputMaybe<CreateAffiliatePromoCodeInput>;
};


export type MutationCreateAffiliatePromoImageArgs = {
  input: AffiliatePromoImageInput;
};


export type MutationCreateAffiliateReportsArgs = {
  input?: InputMaybe<AffiliateReportJobInput>;
};


export type MutationCreateAffiliateTierArgs = {
  input: CreateAffiliateTierInput;
};


export type MutationCreateAssetArgs = {
  input: CreateAssetInput;
};


export type MutationCreateBetArgs = {
  input: CreateBetInput;
};


export type MutationCreateBoxArgs = {
  input: CreateBoxInput;
};


export type MutationCreateCalendarArgs = {
  input: CreateCalendarInput;
};


export type MutationCreateCalendarEntryArgs = {
  input: CreateCalendarEntryInput;
};


export type MutationCreateCasinoGameArgs = {
  input: CreateCasinoGameInput;
};


export type MutationCreateCasinoGameLobbyArgs = {
  input: CreateCasinoGameLobbyInput;
};


export type MutationCreateCasinoGameProviderArgs = {
  input: CreateCasinoGameProviderInput;
};


export type MutationCreateCasinoGameProviderConfigArgs = {
  input: CreateCasinoGameProviderConfigInput;
};


export type MutationCreateCrashBetArgs = {
  input: CreateCrashBetInput;
};


export type MutationCreateCronJobArgs = {
  input: CreateCronJobInput;
};


export type MutationCreateCryptoAddressArgs = {
  input: CreateCryptoAddressInput;
};


export type MutationCreateDiceBetsArgs = {
  input: CreateDiceBetsInput;
};


export type MutationCreateDigitalCodesArgs = {
  input: CreateDigitalCodesInput;
};


export type MutationCreateDocumentArgs = {
  input: CreateDocumentInput;
};


export type MutationCreateEmailArgs = {
  input: CreateEmailInput;
};


export type MutationCreateExchangeArgs = {
  input: CreateExchangeInput;
};


export type MutationCreateGameMessageArgs = {
  input: CreateGameMessageInput;
};


export type MutationCreateGemstoneBoostArgs = {
  input: CreateGemstoneBoostInput;
};


export type MutationCreateGiftCardOptionArgs = {
  input: CreateGiftCardOptionInput;
};


export type MutationCreateGiftCardPromoCodesArgs = {
  input: CreateGiftCardPromoCodesInput;
};


export type MutationCreateGiveawayArgs = {
  input: CreateGiveawayInput;
};


export type MutationCreateInviteCodeArgs = {
  input: CreateInviteCodeInput;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationCreateItemCategoryArgs = {
  input?: InputMaybe<CreateItemCategoryInput>;
};


export type MutationCreateItemVariantArgs = {
  input: CreateItemVariantInput;
};


export type MutationCreateItemsArgs = {
  input: Array<CreateItemInput>;
};


export type MutationCreateJackpotArgs = {
  input: CreateJackpotInput;
};


export type MutationCreateMarketArgs = {
  input: CreateUpdateMarketInput;
};


export type MutationCreateMatchBettingMatchesFromProviderArgs = {
  input: CreateMatchBettingMatchesFromProviderInput;
};


export type MutationCreateMatchBettingSlipArgs = {
  input: CreateMatchBettingSlipInput;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationCreateNotificationMessageArgs = {
  input: CreateNotificationMessageInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreateOrderNoteArgs = {
  input: CreateOrderNoteInput;
};


export type MutationCreatePaymentOptionArgs = {
  input: CreatePaymentOptionInput;
};


export type MutationCreatePlinkoBetArgs = {
  input: CreatePlinkoBetInput;
};


export type MutationCreatePlinkoBetsArgs = {
  input: CreatePlinkoBetsInput;
};


export type MutationCreatePollArgs = {
  input: CreatePollInput;
};


export type MutationCreatePromoCodesArgs = {
  input?: InputMaybe<CreatePromoCodeInput>;
};


export type MutationCreateProxyArgs = {
  input: CreateProxyInput;
};


export type MutationCreatePvpBotArgs = {
  input: CreatePvpBotInput;
};


export type MutationCreatePvpGameArgs = {
  input: CreatePvpGameInput;
};


export type MutationCreatePvpGameMessageArgs = {
  input: CreatePvpGameMessageInput;
};


export type MutationCreatePvpRoundArgs = {
  input: CreatePvpRoundInput;
};


export type MutationCreateRankUpGameArgs = {
  input: CreateRankUpGameInput;
};


export type MutationCreateRetailerArgs = {
  input: CreateRetailerInput;
};


export type MutationCreateSocialStoryArgs = {
  input: CreateSocialStoryInput;
};


export type MutationCreateSteamBotArgs = {
  input: CreateUpdateSteamBotInput;
};


export type MutationCreateSteamBotsArgs = {
  input: Array<CreateUpdateSteamBotInput>;
};


export type MutationCreateSteamOffersArgs = {
  input: CreateSteamOffersInput;
};


export type MutationCreateSupportTicketArgs = {
  input: CreateSupportTicketInput;
};


export type MutationCreateTagArgs = {
  input?: InputMaybe<CreateTagInput>;
};


export type MutationCreateTicketsArgs = {
  input: CreateTicketsInput;
};


export type MutationCreateTileSettingArgs = {
  input: CreateTileSettingInput;
};


export type MutationCreateTradeArgs = {
  input: CreateTradeInput;
};


export type MutationCreateTradesArgs = {
  input: CreateTradesInput;
};


export type MutationCreateTransactionArgs = {
  input: CreateTransactionInput;
};


export type MutationCreateTriggerArgs = {
  input: CreateTriggerInput;
};


export type MutationCreateUserAchievementArgs = {
  input: CreateUserAchievementInput;
};


export type MutationCreateUserAddressArgs = {
  input: CreateUserAddressInput;
};


export type MutationCreateUserCommunicationArgs = {
  input: CreateUserCommunicationInput;
};


export type MutationCreateUserTierAssetArgs = {
  input: CreateUserTierAssetInput;
};


export type MutationCreateWaxPeerTradeArgs = {
  input: CreateWaxPeerTradeInput;
};


export type MutationCreateWishlistArgs = {
  input: CreateWishlistInput;
};


export type MutationCreateWithdrawalRequestArgs = {
  input: CreateWithdrawalRequestInput;
};


export type MutationCreateZbtTradeArgs = {
  input: CreateZbtTradeInput;
};


export type MutationCreateZincOrderArgs = {
  input: CreateZincOrderInput;
};


export type MutationDeleteAchievementArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAffiliateTierArgs = {
  input: DeleteAffiliateTierInput;
};


export type MutationDeleteAssetArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCacheKeyArgs = {
  key: Scalars['String'];
};


export type MutationDeleteCalendarArgs = {
  input: DeleteCalendarInput;
};


export type MutationDeleteCronJobArgs = {
  input: DeleteCronJobInput;
};


export type MutationDeleteCryptoAddressArgs = {
  input: DeleteCryptoAddressInput;
};


export type MutationDeleteDigitalCodeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDocumentArgs = {
  input: DeleteDocumentInput;
};


export type MutationDeleteItemCategoryArgs = {
  input?: InputMaybe<DeleteItemCategoryInput>;
};


export type MutationDeleteItemVariantArgs = {
  input: DeleteItemVariantInput;
};


export type MutationDeleteMarketArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMessagesArgs = {
  input: DeleteMessagesInput;
};


export type MutationDeleteOrderArgs = {
  input: DeleteOrderInput;
};


export type MutationDeletePaymentOptionArgs = {
  input: DeletePaymentOptionInput;
};


export type MutationDeletePollArgs = {
  input: DeletePollInput;
};


export type MutationDeletePromoCodeArgs = {
  input?: InputMaybe<DeletePromoCodeInput>;
};


export type MutationDeleteProxyArgs = {
  input: DeleteProxyInput;
};


export type MutationDeleteRetailerArgs = {
  input: DeleteRetailerInput;
};


export type MutationDeleteSocialStoryArgs = {
  input: DeleteSocialStoryInput;
};


export type MutationDeleteSteamBotArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSteamOfferArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTagArgs = {
  input?: InputMaybe<DeleteTagInput>;
};


export type MutationDeleteTileSettingArgs = {
  input: DeleteTileSettingInput;
};


export type MutationDeleteUserAddressArgs = {
  input: DeleteUserAddressInput;
};


export type MutationDeleteUserCommunicationArgs = {
  input: DeleteUserCommunicationInput;
};


export type MutationDeleteUserTierAssetArgs = {
  id: Scalars['ID'];
};


export type MutationDisableTotpTwoFactorAuthenticationArgs = {
  input: DisableTotpTwoFactorAuthenticationInput;
};


export type MutationEnableTotpTwoFactorAuthenticationArgs = {
  input: EnableTotpTwoFactorAuthenticationInput;
};


export type MutationExitCrashArgs = {
  input: ExitCrashInput;
};


export type MutationExitPvpGameArgs = {
  input: ExitPvpGameInput;
};


export type MutationExportUserPollOptionsArgs = {
  input: ExportUserPollOptionsInput;
};


export type MutationFinishGameArgs = {
  input: FinishGameInput;
};


export type MutationFlattenItemArgs = {
  input: FlattenItemInput;
};


export type MutationFlushAchievementCacheArgs = {
  input?: InputMaybe<FlushAchievementCacheInput>;
};


export type MutationFlushSettingCacheArgs = {
  input?: InputMaybe<FlushSettingInput>;
};


export type MutationFlushUserAchievementCacheArgs = {
  input: FlushUserAchievementCacheInput;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationGenerateBoxesCsvArgs = {
  input: GenerateBoxesCsvInput;
};


export type MutationGenerateMatchBettingReportArgs = {
  input: GenerateMatchBettingReportInput;
};


export type MutationGenerateNewTotpTwoFactorBackupCodesArgs = {
  input: GenerateNewTotpTwoFactorBackupCodesInput;
};


export type MutationGenerateTradesCsvArgs = {
  input: GenerateTradesCsvInput;
};


export type MutationGenerateTransactionsCsvArgs = {
  input: GenerateTransactionsCsvInput;
};


export type MutationGenerateUserDepositWithdrawalCsvArgs = {
  input: GenerateUserDepositWithdrawalCsvInput;
};


export type MutationGenerateWalletChangesCsvArgs = {
  input: GenerateWalletChangesCsvInput;
};


export type MutationIncreaseWithdrawalRequestAmountArgs = {
  input: IncreaseWithdrawalRequestInput;
};


export type MutationInvalidateAllUserSessionsArgs = {
  input?: InputMaybe<InvalidateAllUserSessionsInput>;
};


export type MutationJoinGiveawayArgs = {
  input: JoinGiveawayInput;
};


export type MutationJoinPvpGameArgs = {
  input: JoinPvpGameInput;
};


export type MutationJoinTradesArgs = {
  input: JoinTradesInput;
};


export type MutationLoginArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationMarkNotificationMessagesAsReadArgs = {
  input: MarkNotificationMessagesAsReadInput;
};


export type MutationMarkNotificationsAsReadArgs = {
  input: MarkNotificationsAsReadInput;
};


export type MutationMigrateTransactionsArgs = {
  input: MigrateTransactionsInput;
};


export type MutationMoveBetweenWalletsArgs = {
  input: MoveBetweenWalletsInput;
};


export type MutationOpenBoxArgs = {
  input: OpenBoxInput;
};


export type MutationPauseCronJobArgs = {
  input: PauseCronJobInput;
};


export type MutationPayoutJackpotTicketArgs = {
  input: PayoutTicketInput;
};


export type MutationPlayPvpGameArgs = {
  input: PlayPvpGameInput;
};


export type MutationProcessMatchBettingMarketArgs = {
  input: ProcessMatchBettingMarketInput;
};


export type MutationProcessSettledMatchBettingMatchArgs = {
  input: ProcessSettledMatchBettingMatchInput;
};


export type MutationProcessTradeArgs = {
  input: ProcessTradeInput;
};


export type MutationPurchaseBoxArgs = {
  input: PurchaseBoxInput;
};


export type MutationPurchaseXpArgs = {
  input: PurchaseXpInput;
};


export type MutationPurgeTaskQueueArgs = {
  input: PurgeTaskQueueInput;
};


export type MutationReadySteamOfferArgs = {
  input: ReadySteamOfferInput;
};


export type MutationRecalculateBoxStatisticsArgs = {
  input: RecalculateBoxStatisticsInput;
};


export type MutationRecalculateJackpotArgs = {
  input: RecalculateJackpotInput;
};


export type MutationRecalculateJackpotTicketsArgs = {
  input: RecalculateJackpotTicketsInput;
};


export type MutationRefreshBoxOpeningStreamArgs = {
  input?: InputMaybe<RefreshBoxOpeningStreamInput>;
};


export type MutationRefreshBoxesArgs = {
  input: RefreshBoxesInput;
};


export type MutationRefreshCachedGameBetsArgs = {
  input: RefreshCachedGameBetsInput;
};


export type MutationRefreshCachedLatestGamesArgs = {
  input: RefreshCachedLatestGamesInput;
};


export type MutationRefreshMatchBettingMatchesStatsArgs = {
  input: RefreshMatchBettingMatchesStatsInput;
};


export type MutationRefundStuckPvpGameBetsArgs = {
  input: RefundStuckPvpGameBetsInput;
};


export type MutationRefundUserBoxArgs = {
  input: RefundUserBoxInput;
};


export type MutationRequestAffiliateLoanArgs = {
  input: AffiliateLoanRequestInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationResolveCasinoGameImagesArgs = {
  casinoGameId?: InputMaybe<Scalars['ID']>;
  studioCodes?: InputMaybe<Array<CasinoGameProviderCode>>;
};


export type MutationRespondToAffiliateLoanArgs = {
  input: AffiliateLoanResponseToInput;
};


export type MutationResubscribeUserToAllMarketingEmailsArgs = {
  input: ResubscribeUserToAllMarketingEmailsInput;
};


export type MutationResumeCronJobArgs = {
  input: ResumeCronJobInput;
};


export type MutationRetrieveTotpTwoFactorBackupCodesArgs = {
  input: RetrieveTotpTwoFactorBackupCodesInput;
};


export type MutationRetryZincOrderArgs = {
  input: RetryZincOrderInput;
};


export type MutationRevertUserArgs = {
  input: RevertUserInput;
};


export type MutationScheduleSyncForMatchBettingMatchesArgs = {
  input: ScheduleSyncForMatchBettingMatchesInput;
};


export type MutationSelectPollOptionsArgs = {
  input: SelectPollOptionsInput;
};


export type MutationSendOrderDeliveredEmailArgs = {
  input: SendOrderDeliveredEmailInput;
};


export type MutationSendSelfExclusionExpiredEmailArgs = {
  input: SendSelfExclusionExpiredEmailInput;
};


export type MutationSendValidationEmailArgs = {
  input: SendValidationEmailInput;
};


export type MutationSetUserAssetArgs = {
  input?: InputMaybe<SetUserAvatarInput>;
};


export type MutationSleepSteamBotArgs = {
  id: Scalars['ID'];
};


export type MutationStartCasinoGameSessionArgs = {
  input: StartCasinoGameSessionInput;
};


export type MutationSyncItemPricesArgs = {
  input: SyncItemPricesInput;
};


export type MutationSyncMatchBettingMatchesArgs = {
  input: SyncMatchBettingMatchesInput;
};


export type MutationSyncNewItemsArgs = {
  input: SyncNewItemsInput;
};


export type MutationSyncUserReportsArgs = {
  input: SyncUserReportsInput;
};


export type MutationToggleFavoriteBoxArgs = {
  input: ToggleFavoriteBoxInput;
};


export type MutationTrackTradeArgs = {
  input: TrackTradeInput;
};


export type MutationTrackWaxPeerTradeArgs = {
  input: TrackWaxPeerTradeInput;
};


export type MutationTrackZbtTradeArgs = {
  input: TrackZbtTradeInput;
};


export type MutationTriggerUserAchievementArgs = {
  input: TriggerUserAchievementInput;
};


export type MutationUpdateAchievementArgs = {
  id: Scalars['ID'];
  input: UpdateAchievementInput;
};


export type MutationUpdateAffiliatePromoCodeArgs = {
  input?: InputMaybe<UpdateAffiliatePromoCodeInput>;
};


export type MutationUpdateAffiliateTierArgs = {
  input: UpdateAffiliateTierInput;
};


export type MutationUpdateAvailableAssetsArgs = {
  input: UpdateAvailableAssetsInput;
};


export type MutationUpdateBoxArgs = {
  input: UpdateBoxInput;
};


export type MutationUpdateBoxOrderArgs = {
  input: UpdateBoxOrderInput;
};


export type MutationUpdateCalendarArgs = {
  input: UpdateCalendarInput;
};


export type MutationUpdateCasinoGameArgs = {
  input: UpdateCasinoGameInput;
};


export type MutationUpdateCasinoGameLobbyArgs = {
  input: UpdateCasinoGameLobbyInput;
};


export type MutationUpdateCasinoGameProviderArgs = {
  input: UpdateCasinoGameProviderInput;
};


export type MutationUpdateCasinoGameProviderConfigArgs = {
  input: UpdateCasinoGameProviderConfigInput;
};


export type MutationUpdateCryptoAddressArgs = {
  input: UpdateCryptoAddressInput;
};


export type MutationUpdateDocumentArgs = {
  input: UpdateDocumentInput;
};


export type MutationUpdateExchangeRatesArgs = {
  input: UpdateExchangeRatesInput;
};


export type MutationUpdateGemstoneBoostArgs = {
  input: UpdateGemstoneBoostInput;
};


export type MutationUpdateGiftCardOptionArgs = {
  input: UpdateGiftCardOptionInput;
};


export type MutationUpdateGiveawayArgs = {
  input: UpdateGiveawayInput;
};


export type MutationUpdateInviteCodeArgs = {
  input: UpdateInviteCodeInput;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


export type MutationUpdateItemCategoryArgs = {
  input?: InputMaybe<UpdateItemCategoryInput>;
};


export type MutationUpdateItemDisplayValuesArgs = {
  input: UpdateItemDisplayValuesInput;
};


export type MutationUpdateItemExchangeRatesArgs = {
  input: UpdateItemExchangeRatesInput;
};


export type MutationUpdateItemMarkupsArgs = {
  input: UpdateItemMarkupsInput;
};


export type MutationUpdateItemValuesArgs = {
  input: UpdateItemValuesInput;
};


export type MutationUpdateItemVariantArgs = {
  input: UpdateItemVariantInput;
};


export type MutationUpdateItemVariantsArgs = {
  input: Array<UpdateItemVariantInput>;
  secret?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateJackpotArgs = {
  input: UpdateJackpotInput;
};


export type MutationUpdateMarketArgs = {
  id: Scalars['ID'];
  input: CreateUpdateMarketInput;
};


export type MutationUpdateMatchBettingSlipArgs = {
  input: UpdateMatchBettingSlipInput;
};


export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};


export type MutationUpdatePaymentOptionArgs = {
  input: UpdatePaymentOptionInput;
};


export type MutationUpdatePollArgs = {
  input: UpdatePollInput;
};


export type MutationUpdatePollOptionArgs = {
  input: UpdatePollOptionInput;
};


export type MutationUpdatePollStatusArgs = {
  input: UpdatePollStatusInput;
};


export type MutationUpdatePromoCodeArgs = {
  input?: InputMaybe<UpdatePromoCodeInput>;
};


export type MutationUpdateProxyArgs = {
  input: UpdateProxyInput;
};


export type MutationUpdatePvpBotArgs = {
  input: UpdatePvpBotInput;
};


export type MutationUpdateRetailerArgs = {
  input: UpdateRetailerInput;
};


export type MutationUpdateSettingArgs = {
  input: UpdateSettingInput;
};


export type MutationUpdateSocialStoryArgs = {
  input: UpdateSocialStoryInput;
};


export type MutationUpdateSteamBotArgs = {
  id: Scalars['ID'];
  input: CreateUpdateSteamBotInput;
};


export type MutationUpdateSteamStatusArgs = {
  input: UpdateSteamStatusInput;
};


export type MutationUpdateSuspectedTraderArgs = {
  input: UpdateSuspectedTraderInput;
};


export type MutationUpdateTagArgs = {
  input?: InputMaybe<UpdateTagInput>;
};


export type MutationUpdateTileSettingArgs = {
  input: UpdateTileSettingInput;
};


export type MutationUpdateTradesMarkupArgs = {
  input: UpdateTradesMarkupInput;
};


export type MutationUpdateTransactionArgs = {
  input: UpdateTransactionInput;
};


export type MutationUpdateTriggerArgs = {
  input: UpdateTriggerInput;
};


export type MutationUpdateTriggerStatusArgs = {
  input: UpdateTriggerStatusInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateUserAddressArgs = {
  input: UpdateUserAddressInput;
};


export type MutationUpdateUserEmailArgs = {
  input: UpdateUserEmailInput;
};


export type MutationUpdateUserItemArgs = {
  input: UpdateUserItemInput;
};


export type MutationUpdateUserItemShipToArgs = {
  input: UpdateUserItemShipToInput;
};


export type MutationUpdateUserPreferencesArgs = {
  input: UpdateUserPreferencesInput;
};


export type MutationUpdateUserTierArgs = {
  input: UpdateUserTierInput;
};


export type MutationUpdateUserTierAssetArgs = {
  input: UpdateUserTierAssetInput;
};


export type MutationUpdateWalletArgs = {
  input: UpdateWalletInput;
};


export type MutationUpdateWishlistArgs = {
  input: UpdateWishlistInput;
};


export type MutationUpdateWithdrawalRequestArgs = {
  input: UpdateWithdrawalRequestInput;
};


export type MutationUsePromoCodeArgs = {
  input: UsePromoCodeInput;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};


export type MutationWakeUpSteamBotArgs = {
  id: Scalars['ID'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Note = Node & {
  __typename?: 'Note';
  body?: Maybe<Scalars['String']>;
  createdAt: Scalars['SequelizeDate'];
  creator?: Maybe<User>;
  creatorId?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  external?: Maybe<SourceModels>;
  externalId?: Maybe<Scalars['ID']>;
  externalModel?: Maybe<ExternalModel>;
  id: Scalars['ID'];
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type NoteConnection = {
  __typename?: 'NoteConnection';
  edges?: Maybe<Array<Maybe<NoteEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type NoteEdge = {
  __typename?: 'NoteEdge';
  cursor: Scalars['String'];
  node?: Maybe<Note>;
};

export enum NoteOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type Notification = Node & {
  __typename?: 'Notification';
  createdAt: Scalars['SequelizeDate'];
  creator?: Maybe<User>;
  creatorId?: Maybe<Scalars['ID']>;
  externalId?: Maybe<Scalars['Int']>;
  externalModel?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  messages?: Maybe<NotificationMessageConnection>;
  meta?: Maybe<Scalars['JSON']>;
  /** @deprecated Temporary while FE is being updated to change meta type */
  meta2?: Maybe<NotificationMeta>;
  readAt?: Maybe<Scalars['SequelizeDate']>;
  type: NotificationType;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  withMessages: Scalars['Boolean'];
};


export type NotificationMessagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationMessageOrderBy>>>;
  unreadOnly?: InputMaybe<Scalars['Boolean']>;
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  edges?: Maybe<Array<Maybe<NotificationEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  cursor: Scalars['String'];
  node?: Maybe<Notification>;
};

export type NotificationMessage = Node & {
  __typename?: 'NotificationMessage';
  content: Scalars['String'];
  createdAt: Scalars['SequelizeDate'];
  id: Scalars['ID'];
  notification: Notification;
  notificationId: Scalars['ID'];
  notificationOwner: User;
  notificationOwnerId: Scalars['ID'];
  readAt?: Maybe<Scalars['SequelizeDate']>;
  readBy?: Maybe<User>;
  readById?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
};

export type NotificationMessageConnection = {
  __typename?: 'NotificationMessageConnection';
  edges?: Maybe<Array<Maybe<NotificationMessageEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type NotificationMessageEdge = {
  __typename?: 'NotificationMessageEdge';
  cursor: Scalars['String'];
  node?: Maybe<NotificationMessage>;
};

export enum NotificationMessageOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  ReadAt = 'READ_AT'
}

export type NotificationMeta = {
  __typename?: 'NotificationMeta';
  currency?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['SequelizeDate']>;
  itemVariantName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  trackingUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export enum NotificationOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  ReadAt = 'READ_AT'
}

export enum NotificationType {
  OrderCreated = 'ORDER_CREATED',
  OrderShipped = 'ORDER_SHIPPED',
  UpdateItemVariantsFail = 'UPDATE_ITEM_VARIANTS_FAIL',
  UpdateItemVariantsSuccess = 'UPDATE_ITEM_VARIANTS_SUCCESS',
  UserAchievementCreated = 'USER_ACHIEVEMENT_CREATED',
  UserItemCancelled = 'USER_ITEM_CANCELLED',
  UserItemProcessing = 'USER_ITEM_PROCESSING',
  UserItemRequested = 'USER_ITEM_REQUESTED'
}

export enum OfferDirection {
  Give = 'GIVE',
  Take = 'TAKE'
}

export type OpenBoxInput = {
  amount?: InputMaybe<Scalars['Int']>;
  boxId: Scalars['ID'];
  multiplierBoxBet?: InputMaybe<Scalars['Float']>;
};

export type OpenTilePayload = {
  __typename?: 'OpenTilePayload';
  tileOpening: TileOpening;
};

export type Order = Node & {
  __typename?: 'Order';
  cost: Scalars['Float'];
  createdAt: Scalars['SequelizeDate'];
  createdInSeconds?: Maybe<Scalars['Int']>;
  creator?: Maybe<User>;
  creatorId?: Maybe<Scalars['ID']>;
  currency: Scalars['String'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  deliveryAt?: Maybe<Scalars['SequelizeDate']>;
  deliveryCost: Scalars['Float'];
  estimatedDeliveryInDays?: Maybe<Scalars['String']>;
  estimatedDeliveryStrategy?: Maybe<OrderEstimatedDeliveryStrategy>;
  id: Scalars['ID'];
  notes: OrderNoteConnection;
  screenshotUrl?: Maybe<Scalars['String']>;
  shippedAt?: Maybe<Scalars['SequelizeDate']>;
  trackingUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
  userItems: UserItemConnection;
  zincOrder?: Maybe<ZincOrder>;
};


export type OrderNotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};


export type OrderUserItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  edges?: Maybe<Array<Maybe<OrderEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type OrderEdge = {
  __typename?: 'OrderEdge';
  cursor: Scalars['String'];
  node?: Maybe<Order>;
};

export enum OrderEstimatedDeliveryStrategy {
  Auto = 'AUTO',
  Manual = 'MANUAL'
}

export type OrderNote = Node & {
  __typename?: 'OrderNote';
  body?: Maybe<Scalars['String']>;
  createdAt: Scalars['SequelizeDate'];
  creator?: Maybe<User>;
  creatorId?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['ID']>;
  private?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['SequelizeDate'];
};

export type OrderNoteConnection = {
  __typename?: 'OrderNoteConnection';
  edges?: Maybe<Array<Maybe<OrderNoteEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type OrderNoteEdge = {
  __typename?: 'OrderNoteEdge';
  cursor: Scalars['String'];
  node?: Maybe<OrderNote>;
};

export enum OrderNoteOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum OrderOrderBy {
  Cost = 'COST',
  CostDesc = 'COST_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type OrderStats = {
  __typename?: 'OrderStats';
  cost?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  deliveryCost?: Maybe<Scalars['Float']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PauseCronJobInput = {
  name: Scalars['String'];
};

export type PauseCronJobPayload = {
  __typename?: 'PauseCronJobPayload';
  cronJob?: Maybe<CronJob>;
};

export enum PaymentMethod {
  Ada = 'ADA',
  Bch = 'BCH',
  Bnb = 'BNB',
  BnbBsc = 'BNB_BSC',
  Btc = 'BTC',
  Btg = 'BTG',
  Busd = 'BUSD',
  Dai = 'DAI',
  Dash = 'DASH',
  Doge = 'DOGE',
  Etc = 'ETC',
  Eth = 'ETH',
  Eurs = 'EURS',
  Ltc = 'LTC',
  Neo = 'NEO',
  Trx = 'TRX',
  Usdc = 'USDC',
  Usdt = 'USDT',
  Usdte = 'USDTE',
  Usdtt = 'USDTT',
  Xed = 'XED',
  Xin = 'XIN',
  Xrp = 'XRP'
}

export type PaymentOption = Node & {
  __typename?: 'PaymentOption';
  action: PaymentOptionAction;
  apm?: Maybe<PaymentOptionApmType>;
  approximateAmount: Scalars['Boolean'];
  bonusMaxAmount?: Maybe<Scalars['Float']>;
  bonusPercent: Scalars['Float'];
  canRefund: Scalars['Boolean'];
  confirmationsRequired: Scalars['Int'];
  createdAt: Scalars['SequelizeDate'];
  enabled: Scalars['Boolean'];
  extraProcessingIfRiskScoreAtLeast?: Maybe<Scalars['Float']>;
  fixedFee: Scalars['Float'];
  fraudCheckAfter: Scalars['Boolean'];
  fraudCheckBefore: Scalars['Boolean'];
  iconUrl: Scalars['String'];
  id: Scalars['ID'];
  maxAmount: Scalars['Float'];
  /** @deprecated Use maxAmount instead */
  maxDepositAmount: Scalars['Float'];
  /** @deprecated Use maxAmount instead */
  maxExchangedAmount: Scalars['Float'];
  method?: Maybe<PaymentMethod>;
  methodName?: Maybe<Scalars['String']>;
  minAmount: Scalars['Float'];
  /** @deprecated Use minAmount instead */
  minDepositAmount: Scalars['Float'];
  /** @deprecated Use minAmount instead */
  minExchangedAmount: Scalars['Float'];
  order: Scalars['Int'];
  percentageFee: Scalars['Float'];
  provider: PaymentProvider;
  providerConfig?: Maybe<PaymentOptionProviderConfig>;
  providerName: Scalars['String'];
  requiresEmail: Scalars['Boolean'];
  requiresProfile: Scalars['Boolean'];
  totalMaxAmount?: Maybe<Scalars['Float']>;
  totalMaxAmountDuration?: Maybe<Scalars['Duration']>;
  transactionType: PaymentOptionTransactionType;
  type: Scalars['String'];
  updatedAt: Scalars['SequelizeDate'];
  visible: Scalars['Boolean'];
  whitelistedCountries: Array<Scalars['String']>;
};

export enum PaymentOptionApmType {
  ApplePay = 'APPLE_PAY',
  Paypal = 'PAYPAL'
}

export enum PaymentOptionAction {
  Deposit = 'DEPOSIT',
  Withdrawal = 'WITHDRAWAL'
}

export type PaymentOptionProviderConfig = {
  __typename?: 'PaymentOptionProviderConfig';
  safeChargePaymentMethod?: Maybe<Scalars['String']>;
};

export type PaymentOptionProviderConfigInput = {
  safeChargePaymentMethod?: InputMaybe<Scalars['String']>;
};

export enum PaymentOptionTransactionType {
  CryptoAddress = 'CRYPTO_ADDRESS',
  Transaction = 'TRANSACTION'
}

export enum PaymentProvider {
  Alternativepayments = 'ALTERNATIVEPAYMENTS',
  Amazonpay = 'AMAZONPAY',
  Checkout = 'CHECKOUT',
  CoinsPaid = 'COINS_PAID',
  CoinGate = 'COIN_GATE',
  Cubits = 'CUBITS',
  Ecopayz = 'ECOPAYZ',
  Fondy = 'FONDY',
  G2Apay = 'G2APAY',
  Ips = 'IPS',
  Paysafecard = 'PAYSAFECARD',
  PayBear = 'PAY_BEAR',
  PayOp = 'PAY_OP',
  SafeCharge = 'SAFE_CHARGE',
  Stripe = 'STRIPE',
  Tapm = 'TAPM',
  TrustPayments = 'TRUST_PAYMENTS',
  WonderlandPay = 'WONDERLAND_PAY'
}

export type PayoutJackpotPayload = {
  __typename?: 'PayoutJackpotPayload';
  jackpot?: Maybe<Jackpot>;
};

export type PayoutJackpotTicketPayload = {
  __typename?: 'PayoutJackpotTicketPayload';
  jackpotWinningTicket?: Maybe<JackpotWinningTicket>;
};

export type PayoutTicketInput = {
  jackpotId: Scalars['ID'];
  position?: InputMaybe<Scalars['Int']>;
  scheduledAt?: InputMaybe<Scalars['SequelizeDate']>;
  secret?: InputMaybe<Scalars['String']>;
  sequentialNumber?: InputMaybe<Scalars['Int']>;
  teamId?: InputMaybe<Scalars['ID']>;
  ticketId?: InputMaybe<Scalars['ID']>;
};

export type PlayPvpGameInput = {
  pvpGameId: Scalars['ID'];
  secret?: InputMaybe<Scalars['String']>;
};

export type PlayPvpGamePayload = {
  __typename?: 'PlayPvpGamePayload';
  pvpBets: Array<PvpBet>;
  pvpGame: PvpGame;
  pvpRound?: Maybe<PvpRound>;
  pvpRounds?: Maybe<Array<PvpRound>>;
  success: Scalars['Boolean'];
};

export type PlayPvpGameSubscriptionPayload = {
  __typename?: 'PlayPvpGameSubscriptionPayload';
  pvpGameId: Scalars['ID'];
  pvpRoundId?: Maybe<Scalars['ID']>;
};

export type PlayerRevenue = {
  __typename?: 'PlayerRevenue';
  currentBalance?: Maybe<Scalars['Float']>;
  depositCount?: Maybe<Scalars['Int']>;
  depositTotal?: Maybe<Scalars['Float']>;
  holdPercentage?: Maybe<Scalars['Float']>;
  issuedRevShare?: Maybe<Scalars['Float']>;
  withdrawAmount?: Maybe<Scalars['Float']>;
};

export type PlinkoBet = Node & {
  __typename?: 'PlinkoBet';
  affiliateUserId?: Maybe<Scalars['ID']>;
  bet: Scalars['Float'];
  betItems?: Maybe<Array<PlinkoBetItem>>;
  betItemsAmount: Scalars['Float'];
  bigWin: Scalars['Boolean'];
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  excluded: Scalars['Boolean'];
  gameProviderFeePercent?: Maybe<Scalars['Float']>;
  houseEdgePercent?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  multiplier: Scalars['Float'];
  multipliers: Array<Scalars['Float']>;
  path: Array<PlinkoBetPath>;
  payoutRemainder: Scalars['Float'];
  payoutType: PlinkoBetPayoutType;
  pfVersion: ProvablyFairVersion;
  pins: Scalars['Int'];
  rakeback?: Maybe<Scalars['Float']>;
  riskMode: PlinkoBetRiskMode;
  roll: Roll;
  rollId: Scalars['ID'];
  slot: PlinkoBetSlot;
  ticketsWon: Scalars['Int'];
  totalBet: Scalars['Float'];
  totalPayout: Scalars['Float'];
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  userProfit?: Maybe<Scalars['Float']>;
  winItemVariant?: Maybe<ItemVariant>;
  winItemVariantId?: Maybe<Scalars['Int']>;
  winUserItem?: Maybe<UserItem>;
  winUserItemId?: Maybe<Scalars['Int']>;
  winUserItemValue?: Maybe<Scalars['Float']>;
};

export type PlinkoBetConnection = {
  __typename?: 'PlinkoBetConnection';
  edges?: Maybe<Array<Maybe<PlinkoBetEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type PlinkoBetEdge = {
  __typename?: 'PlinkoBetEdge';
  cursor: Scalars['String'];
  node?: Maybe<PlinkoBet>;
};

export type PlinkoBetItem = {
  __typename?: 'PlinkoBetItem';
  baseCurrency: Scalars['String'];
  currency: Scalars['String'];
  itemVariant: ItemVariant;
  itemVariantId: Scalars['ID'];
  userItem: UserItem;
  userItemId: Scalars['ID'];
  value: Scalars['Float'];
  valueBase: Scalars['Float'];
};

export enum PlinkoBetOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Multiplier = 'MULTIPLIER',
  MultiplierDesc = 'MULTIPLIER_DESC',
  TotalBet = 'TOTAL_BET',
  TotalBetDesc = 'TOTAL_BET_DESC',
  TotalPayout = 'TOTAL_PAYOUT',
  TotalPayoutDesc = 'TOTAL_PAYOUT_DESC',
  UserProfit = 'USER_PROFIT',
  UserProfitDesc = 'USER_PROFIT_DESC'
}

export enum PlinkoBetPath {
  Left = 'LEFT',
  Right = 'RIGHT'
}

export enum PlinkoBetPayoutType {
  CoinsOnly = 'COINS_ONLY',
  ItemsAndCoins = 'ITEMS_AND_COINS'
}

export enum PlinkoBetRiskMode {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export type PlinkoBetSlot = {
  __typename?: 'PlinkoBetSlot';
  pins: Scalars['Int'];
  riskMode: PlinkoBetRiskMode;
  slotIndex: Scalars['Int'];
  slotMaxRoll: Scalars['Int'];
  slotMinRoll: Scalars['Int'];
  slotMultiplier: Scalars['Float'];
};

export type PlinkoBetSlotsPayload = {
  __typename?: 'PlinkoBetSlotsPayload';
  houseEdgePercent?: Maybe<Scalars['Float']>;
  pinsMax: Scalars['Int'];
  pinsMin: Scalars['Int'];
  slots: Array<PlinkoBetSlot>;
};

export type PlinkoBetStats = {
  __typename?: 'PlinkoBetStats';
  avgHouseEdgePercent?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  maxHouseEdgePercent?: Maybe<Scalars['Float']>;
  minHouseEdgePercent?: Maybe<Scalars['Float']>;
  totalBet?: Maybe<Scalars['Float']>;
  totalPayout?: Maybe<Scalars['Float']>;
  totalProfit?: Maybe<Scalars['Float']>;
};

export type Poll = Node & {
  __typename?: 'Poll';
  correctAnswer: Scalars['Boolean'];
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  description: Scalars['String'];
  endAt: Scalars['SequelizeDate'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isMultiSelect: Scalars['Boolean'];
  /** @deprecated Use 'isMultiSelect', typo in old version */
  isMutliSelect: Scalars['Boolean'];
  maxOptionsToSelect: Scalars['Int'];
  minOptionsToSelect: Scalars['Int'];
  name: Scalars['String'];
  pollOptions: PollOptionConnection;
  results?: Maybe<Array<PollResult>>;
  startAt: Scalars['SequelizeDate'];
  status: PollStatus;
  /** @deprecated Use 'results' and sum counts */
  totalVotes: Scalars['Int'];
  updatedAt: Scalars['SequelizeDate'];
  userRequirements?: Maybe<PollUserRequirements>;
};

export type PollConnection = {
  __typename?: 'PollConnection';
  edges?: Maybe<Array<Maybe<PollEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type PollEdge = {
  __typename?: 'PollEdge';
  cursor: Scalars['String'];
  node?: Maybe<Poll>;
};

export type PollOption = Node & {
  __typename?: 'PollOption';
  createdAt: Scalars['SequelizeDate'];
  id: Scalars['ID'];
  name: Scalars['String'];
  poll: Poll;
  pollId: Scalars['ID'];
  updatedAt: Scalars['SequelizeDate'];
  won?: Maybe<Scalars['Boolean']>;
};

export type PollOptionConnection = {
  __typename?: 'PollOptionConnection';
  edges?: Maybe<Array<Maybe<PollOptionEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type PollOptionEdge = {
  __typename?: 'PollOptionEdge';
  cursor: Scalars['String'];
  node?: Maybe<PollOption>;
};

export enum PollOptionOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum PollOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EndAt = 'END_AT',
  EndAtDesc = 'END_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  StartAt = 'START_AT',
  StartAtDesc = 'START_AT_DESC'
}

export type PollResult = {
  __typename?: 'PollResult';
  count: Scalars['Int'];
  pollOptionIds: Array<Scalars['ID']>;
  pollOptions: Array<PollOption>;
};

export enum PollStatus {
  Cancelled = 'CANCELLED',
  Created = 'CREATED',
  Finished = 'FINISHED',
  Started = 'STARTED'
}

export type PollUserRequirements = {
  __typename?: 'PollUserRequirements';
  maxLevel?: Maybe<Scalars['Int']>;
  minLevel?: Maybe<Scalars['Int']>;
};

export type PollUserRequirementsInput = {
  maxLevel?: InputMaybe<Scalars['Int']>;
  minLevel?: InputMaybe<Scalars['Int']>;
};

export type PositionedCasinoGameInput = {
  casinoGameId: Scalars['ID'];
  index: Scalars['Int'];
};

export type ProcessMatchBettingMarketInput = {
  isRollback: Scalars['Boolean'];
  matchBettingMarketId: Scalars['ID'];
  secret?: InputMaybe<Scalars['String']>;
};

export type ProcessMatchBettingMarketPayload = {
  __typename?: 'ProcessMatchBettingMarketPayload';
  success: Scalars['Boolean'];
};

export type ProcessSettledMatchBettingMatchInput = {
  matchBettingMatchId: Scalars['ID'];
  secret?: InputMaybe<Scalars['String']>;
};

export type ProcessSettledMatchBettingMatchPayload = {
  __typename?: 'ProcessSettledMatchBettingMatchPayload';
  success: Scalars['Boolean'];
};

export type ProcessTradeInput = {
  tradeId: Scalars['ID'];
};

export type ProcessTradePayload = {
  __typename?: 'ProcessTradePayload';
  trade: Trade;
};

export enum ProductCondition {
  New = 'NEW',
  Refurbished = 'REFURBISHED',
  Unacceptable = 'UNACCEPTABLE',
  UsedAcceptable = 'USED_ACCEPTABLE',
  UsedGood = 'USED_GOOD',
  UsedLikeNew = 'USED_LIKE_NEW',
  UsedVeryGood = 'USED_VERY_GOOD'
}

export type PromoCode = Node & {
  __typename?: 'PromoCode';
  affiliateUser?: Maybe<User>;
  affiliateUserId?: Maybe<Scalars['ID']>;
  amount: Scalars['Int'];
  balance: Scalars['Float'];
  box?: Maybe<Box>;
  boxId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  expired: Scalars['Boolean'];
  giftCardOption?: Maybe<GiftCardOption>;
  giftCardOptionId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  itemVariant?: Maybe<ItemVariant>;
  itemVariantId?: Maybe<Scalars['ID']>;
  market: Market;
  marketId: Scalars['ID'];
  maxBalance: Scalars['Float'];
  maxRedeemCount?: Maybe<Scalars['Int']>;
  minDepositRequirement: Scalars['Float'];
  percentageReward: Scalars['Float'];
  redeemCount: Scalars['Int'];
  type: PromoCodeType;
  updatedAt: Scalars['SequelizeDate'];
  users?: Maybe<Array<Maybe<User>>>;
  walletType?: Maybe<WalletType>;
};

export type PromoCodeConnection = {
  __typename?: 'PromoCodeConnection';
  edges?: Maybe<Array<Maybe<PromoCodeEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type PromoCodeEdge = {
  __typename?: 'PromoCodeEdge';
  cursor: Scalars['String'];
  node?: Maybe<PromoCode>;
};

export enum PromoCodeOrderBy {
  Balance = 'BALANCE',
  BalanceDesc = 'BALANCE_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MaxRedeemCount = 'MAX_REDEEM_COUNT',
  MaxRedeemCountDesc = 'MAX_REDEEM_COUNT_DESC',
  RedeemCount = 'REDEEM_COUNT',
  RedeemCountDesc = 'REDEEM_COUNT_DESC'
}

export type PromoCodePayload = {
  __typename?: 'PromoCodePayload';
  promoCode?: Maybe<PromoCode>;
};

export type PromoCodeRedemptionStats = {
  __typename?: 'PromoCodeRedemptionStats';
  balance?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  currency: Scalars['String'];
};

export type PromoCodeTimer = {
  __typename?: 'PromoCodeTimer';
  secondsLeft?: Maybe<Scalars['Int']>;
  status?: Maybe<UserAffiliateStatus>;
};

export enum PromoCodeType {
  GiftCard = 'GIFT_CARD',
  Promotion = 'PROMOTION'
}

export type Promotion = {
  __typename?: 'Promotion';
  active: Scalars['Boolean'];
  boosts: Array<Boost>;
  ends?: Maybe<Scalars['SequelizeDate']>;
  meta?: Maybe<PromotionMeta>;
  starts?: Maybe<Scalars['SequelizeDate']>;
  type: PromotionType;
};

export enum PromotionBoostType {
  AdditionalRewards = 'ADDITIONAL_REWARDS',
  Rakeback = 'RAKEBACK'
}

export type PromotionMeta = {
  __typename?: 'PromotionMeta';
  fullMoonPromotion?: Maybe<FullMoonPromotionMeta>;
};

export enum PromotionType {
  FullMoon = 'FULL_MOON'
}

export enum ProvablyFairVersion {
  Alea = 'ALEA',
  Crypto = 'CRYPTO',
  CryptoV2 = 'CRYPTO_V2',
  CryptoV3 = 'CRYPTO_V3'
}

export type Proxy = Node & {
  __typename?: 'Proxy';
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  updatedAt: Scalars['SequelizeDate'];
  uri: Scalars['Url'];
};

export type ProxyConnection = {
  __typename?: 'ProxyConnection';
  edges?: Maybe<Array<Maybe<ProxyEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type ProxyEdge = {
  __typename?: 'ProxyEdge';
  cursor: Scalars['String'];
  node?: Maybe<Proxy>;
};

export enum ProxyOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type PurchaseBoxInput = {
  amount?: InputMaybe<Scalars['Int']>;
  boxId: Scalars['ID'];
  multiplierBoxBet?: InputMaybe<Scalars['Float']>;
};

export type PurchaseBoxPayload = {
  __typename?: 'PurchaseBoxPayload';
  box?: Maybe<Box>;
  userBoxes?: Maybe<Array<Maybe<UserBox>>>;
};

export type PurchaseXpInput = {
  currency?: InputMaybe<Scalars['String']>;
  xpAmount: Scalars['Int'];
};

export type PurchaseXpPayload = {
  __typename?: 'PurchaseXpPayload';
  cost: Scalars['Float'];
  currency: Scalars['String'];
  userProgress: UserProgress;
  userProgressChanges: Array<UserProgressChange>;
  xpAmount: Scalars['Int'];
};

export type PurgeTaskQueueInput = {
  name: Scalars['String'];
};

export type PurgeTaskQueuePayload = {
  __typename?: 'PurgeTaskQueuePayload';
  success: Scalars['Boolean'];
};

export type PvpBet = Node & {
  __typename?: 'PvpBet';
  affiliateUserId?: Maybe<Scalars['ID']>;
  bet: Scalars['Float'];
  betId: Scalars['Int'];
  betItems?: Maybe<Array<PvpBetBetItem>>;
  betItemsAmount: Scalars['Float'];
  betRemainder?: Maybe<Scalars['Float']>;
  bigWin: Scalars['Boolean'];
  box?: Maybe<Box>;
  boxId?: Maybe<Scalars['ID']>;
  boxOpening?: Maybe<BoxOpening>;
  /** @deprecated Each box opening has its own PvpBet use boxOpening field */
  boxOpenings?: Maybe<Array<BoxOpening>>;
  byPvpBot: Scalars['Boolean'];
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  finishedAt?: Maybe<Scalars['SequelizeDate']>;
  gameProviderFeePercent?: Maybe<Scalars['Float']>;
  gameType: PvpGameType;
  houseEdge?: Maybe<Scalars['Float']>;
  houseEdgePercent: Scalars['Float'];
  id: Scalars['ID'];
  payout?: Maybe<Scalars['Float']>;
  pvpGame: PvpGame;
  pvpGameId: Scalars['ID'];
  pvpRound: PvpRound;
  pvpRoundId: Scalars['ID'];
  roll?: Maybe<Roll>;
  rollId?: Maybe<Scalars['ID']>;
  rollNumber: Scalars['Int'];
  rollResult?: Maybe<Scalars['String']>;
  rollsHistory?: Maybe<Array<PvpBetRollsHistoryItem>>;
  selection?: Maybe<Scalars['Int']>;
  serverSeed?: Maybe<Seed>;
  serverSeedId?: Maybe<Scalars['ID']>;
  status: PvpBetStatus;
  teamSelection?: Maybe<Scalars['Int']>;
  ticketsWon: Scalars['Int'];
  totalBet: Scalars['Float'];
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  winRemainder?: Maybe<Scalars['Float']>;
  winUserBox?: Maybe<UserBox>;
  winUserBoxId?: Maybe<Scalars['ID']>;
  winUserItem?: Maybe<UserItem>;
  winUserItemId?: Maybe<Scalars['ID']>;
  winUserItemValue?: Maybe<Scalars['Float']>;
};

export type PvpBetBetItem = {
  __typename?: 'PvpBetBetItem';
  itemVariant: ItemVariant;
  itemVariantId: Scalars['ID'];
  userItem: UserItem;
  userItemId: Scalars['ID'];
  value: Scalars['Float'];
};

export type PvpBetConnection = {
  __typename?: 'PvpBetConnection';
  edges?: Maybe<Array<Maybe<PvpBetEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type PvpBetEdge = {
  __typename?: 'PvpBetEdge';
  cursor: Scalars['String'];
  node?: Maybe<PvpBet>;
};

export enum PvpBetOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type PvpBetRollsHistoryItem = {
  __typename?: 'PvpBetRollsHistoryItem';
  nonce: Scalars['Int'];
  pvpBet: PvpBet;
  pvpBetId: Scalars['ID'];
  pvpBetIdAsNumber: Scalars['Int'];
  roll: Roll;
  rollId: Scalars['ID'];
  rollNumber: Scalars['Int'];
  rollResult: Scalars['String'];
  status: PvpBetStatus;
};

export enum PvpBetStatus {
  Created = 'CREATED',
  Draw = 'DRAW',
  Finished = 'FINISHED',
  Lost = 'LOST',
  Refunded = 'REFUNDED',
  WaitingForGameEnd = 'WAITING_FOR_GAME_END',
  Won = 'WON'
}

export type PvpBot = Node & {
  __typename?: 'PvpBot';
  alertOnReserveUse: Scalars['Boolean'];
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  displayName: Scalars['String'];
  id: Scalars['ID'];
  market: Market;
  marketId: Scalars['ID'];
  maxBetAmount: Scalars['Float'];
  minBetAmount: Scalars['Float'];
  remainingReserveUses: Scalars['Int'];
  reserveBalance: Scalars['Float'];
  status: PvpBotStatus;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
};

export type PvpBotConnection = {
  __typename?: 'PvpBotConnection';
  edges?: Maybe<Array<Maybe<PvpBotEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type PvpBotEdge = {
  __typename?: 'PvpBotEdge';
  cursor: Scalars['String'];
  node?: Maybe<PvpBot>;
};

export enum PvpBotOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum PvpBotStatus {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED',
  Suspended = 'SUSPENDED'
}

export type PvpDebugInfo = {
  __typename?: 'PvpDebugInfo';
  autoExit?: Maybe<Scalars['Boolean']>;
  createdByUser?: Maybe<User>;
  createdByUserId?: Maybe<Scalars['ID']>;
  exitedByUser?: Maybe<User>;
  exitedByUserId?: Maybe<Scalars['ID']>;
  playStartedByUser?: Maybe<User>;
  playStartedByUserId?: Maybe<Scalars['ID']>;
  staffExit?: Maybe<Scalars['Boolean']>;
};

export type PvpGame = Node & {
  __typename?: 'PvpGame';
  activeRound?: Maybe<PvpGameActiveRound>;
  /** @deprecated Use activeRound column instead */
  activeRoundNumber?: Maybe<Scalars['Int']>;
  bets: PvpBetConnection;
  blockNumber?: Maybe<Scalars['String']>;
  boxOpenings?: Maybe<BoxOpeningConnection>;
  clientSeed?: Maybe<Seed>;
  clientSeedId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  debugInfo?: Maybe<PvpDebugInfo>;
  finishedAt?: Maybe<Scalars['SequelizeDate']>;
  houseEdgePercent: Scalars['Float'];
  id: Scalars['ID'];
  initialBet: Scalars['Float'];
  initialWinItemVariant?: Maybe<ItemVariant>;
  initialWinItemVariantId?: Maybe<Scalars['ID']>;
  initialWinItemVariantValue?: Maybe<Scalars['Float']>;
  /** @deprecated Use multiplierMode */
  isMultiplierBoxGame?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  maxNumberOfPlayersInTeam?: Maybe<Scalars['Int']>;
  maxNumberOfTeams?: Maybe<Scalars['Int']>;
  maxPlayers?: Maybe<Scalars['Int']>;
  minPlayers: Scalars['Int'];
  mode?: Maybe<PvpGameMode>;
  multiplierMode?: Maybe<PvpGameMultiplierMode>;
  players: Array<PvpGamePlayer>;
  rakeback?: Maybe<Scalars['Float']>;
  rounds: PvpRoundConnection;
  serverSeed?: Maybe<Seed>;
  serverSeedId?: Maybe<Scalars['ID']>;
  startedAt?: Maybe<Scalars['SequelizeDate']>;
  status: PvpGameStatus;
  strategy?: Maybe<PvpGameStrategy>;
  teams: Array<Array<PvpGamePlayer>>;
  totalBet?: Maybe<Scalars['Float']>;
  totalBetCount: Scalars['Int'];
  totalHouseEdge?: Maybe<Scalars['Float']>;
  totalPayout?: Maybe<Scalars['Float']>;
  totalRoundCount: Scalars['Int'];
  type: PvpGameType;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
};


export type PvpGameBetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmountLarge']>;
  last?: InputMaybe<Scalars['PaginationAmountLarge']>;
  pvpBetId?: InputMaybe<Scalars['ID']>;
  statuses?: InputMaybe<Array<PvpBetStatus>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type PvpGameBoxOpeningsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};


export type PvpGameRoundsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  pvpRoundId?: InputMaybe<Scalars['ID']>;
  statuses?: InputMaybe<Array<PvpRoundStatus>>;
};

export type PvpGameActiveRound = {
  __typename?: 'PvpGameActiveRound';
  id: Scalars['ID'];
  number: Scalars['Int'];
  round: PvpRound;
  status: PvpRoundStatus;
};

export type PvpGameBoxInput = {
  amount?: InputMaybe<Scalars['Int']>;
  boxId: Scalars['ID'];
  multiplierBoxBet?: InputMaybe<Scalars['Float']>;
  roundNumber: Scalars['Int'];
};

export type PvpGameConnection = {
  __typename?: 'PvpGameConnection';
  edges?: Maybe<Array<Maybe<PvpGameEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type PvpGameEdge = {
  __typename?: 'PvpGameEdge';
  cursor: Scalars['String'];
  node?: Maybe<PvpGame>;
};

export type PvpGameMessage = {
  __typename?: 'PvpGameMessage';
  body: Scalars['String'];
  pvpGameId: Scalars['ID'];
  userId: Scalars['ID'];
};

export enum PvpGameMode {
  Single = 'SINGLE',
  Team = 'TEAM'
}

export enum PvpGameMultiplierMode {
  BotsOnly = 'BOTS_ONLY',
  Pvp = 'PVP'
}

export enum PvpGameOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  FinishedAt = 'FINISHED_AT',
  FinishedAtDesc = 'FINISHED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  InitialBet = 'INITIAL_BET',
  InitialBetDesc = 'INITIAL_BET_DESC',
  TotalBet = 'TOTAL_BET',
  TotalBetDesc = 'TOTAL_BET_DESC',
  TotalPayout = 'TOTAL_PAYOUT',
  TotalPayoutDesc = 'TOTAL_PAYOUT_DESC'
}

export type PvpGamePlayer = {
  __typename?: 'PvpGamePlayer';
  excluded?: Maybe<Scalars['Boolean']>;
  exitedAt?: Maybe<Scalars['SequelizeDate']>;
  exiter?: Maybe<Scalars['Boolean']>;
  isPvpBot: Scalars['Boolean'];
  joinedAt?: Maybe<Scalars['SequelizeDate']>;
  status: PvpGamePlayerStatus;
  teamSelection?: Maybe<Scalars['Int']>;
  timesWon?: Maybe<Scalars['Int']>;
  totalBet?: Maybe<Scalars['Float']>;
  totalPayout?: Maybe<Scalars['Float']>;
  totalProfit?: Maybe<Scalars['Float']>;
  user: User;
  userId: Scalars['ID'];
  winner?: Maybe<Scalars['Boolean']>;
  wonBalance?: Maybe<Scalars['Float']>;
  wonItemVariantIds?: Maybe<Array<Scalars['ID']>>;
  wonItemVariants?: Maybe<Array<ItemVariant>>;
  wonUserItemIds?: Maybe<Array<Scalars['ID']>>;
  wonUserItems?: Maybe<Array<UserItem>>;
  xpRewarded?: Maybe<Scalars['BigInt']>;
};

export enum PvpGamePlayerStatus {
  Exited = 'EXITED',
  Joined = 'JOINED'
}

export type PvpGameStats = {
  __typename?: 'PvpGameStats';
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  totalBet?: Maybe<Scalars['Float']>;
  totalBetCount?: Maybe<Scalars['Int']>;
  totalHouseEdge?: Maybe<Scalars['Float']>;
  totalPayout?: Maybe<Scalars['Float']>;
};

export enum PvpGameStatus {
  Cancelled = 'CANCELLED',
  Created = 'CREATED',
  Finished = 'FINISHED',
  Started = 'STARTED'
}

export enum PvpGameStrategy {
  HighestSum = 'HIGHEST_SUM',
  LowestSum = 'LOWEST_SUM'
}

export enum PvpGameType {
  Box = 'BOX',
  CoinFlip = 'COIN_FLIP',
  Dice = 'DICE'
}

export type PvpRound = Node & {
  __typename?: 'PvpRound';
  amountBetPerBox?: Maybe<Scalars['Float']>;
  bet: Scalars['Float'];
  betChanged: Scalars['Boolean'];
  bets: PvpBetConnection;
  biggestWinValue?: Maybe<Scalars['Float']>;
  blockNumber?: Maybe<Scalars['String']>;
  box?: Maybe<Box>;
  boxId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  debugInfo?: Maybe<PvpDebugInfo>;
  finishedAt?: Maybe<Scalars['SequelizeDate']>;
  gameType: PvpGameType;
  hasDraws: Scalars['Boolean'];
  houseEdgePercent: Scalars['Float'];
  id: Scalars['ID'];
  numberOfBoxes?: Maybe<Scalars['Int']>;
  players: Array<PvpRoundPlayer>;
  pvpGame: PvpGame;
  pvpGameId: Scalars['ID'];
  roll?: Maybe<Roll>;
  rollId?: Maybe<Scalars['ID']>;
  rollResult?: Maybe<Scalars['String']>;
  roundId: Scalars['Int'];
  roundNumber: Scalars['Int'];
  selections?: Maybe<Scalars['JSON']>;
  serverSeed?: Maybe<Seed>;
  serverSeedId?: Maybe<Scalars['ID']>;
  startedAt?: Maybe<Scalars['SequelizeDate']>;
  status: PvpRoundStatus;
  totalBet?: Maybe<Scalars['Float']>;
  totalBetCount: Scalars['Int'];
  totalHouseEdge?: Maybe<Scalars['Float']>;
  totalPayout?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  winBox?: Maybe<Box>;
  winBoxId?: Maybe<Scalars['ID']>;
  winItemVariant?: Maybe<ItemVariant>;
  winItemVariantId?: Maybe<Scalars['ID']>;
  winItemVariantValue?: Maybe<Scalars['Float']>;
};


export type PvpRoundBetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmountLarge']>;
  last?: InputMaybe<Scalars['PaginationAmountLarge']>;
  pvpBetId?: InputMaybe<Scalars['ID']>;
  statuses?: InputMaybe<Array<PvpBetStatus>>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type PvpRoundConnection = {
  __typename?: 'PvpRoundConnection';
  edges?: Maybe<Array<Maybe<PvpRoundEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type PvpRoundEdge = {
  __typename?: 'PvpRoundEdge';
  cursor: Scalars['String'];
  node?: Maybe<PvpRound>;
};

export enum PvpRoundOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  RoundNumber = 'ROUND_NUMBER',
  RoundNumberDesc = 'ROUND_NUMBER_DESC'
}

export type PvpRoundPlayer = {
  __typename?: 'PvpRoundPlayer';
  excluded?: Maybe<Scalars['Boolean']>;
  exitedAt?: Maybe<Scalars['SequelizeDate']>;
  exiter?: Maybe<Scalars['Boolean']>;
  isPvpBot: Scalars['Boolean'];
  joinedAt?: Maybe<Scalars['SequelizeDate']>;
  payout?: Maybe<Scalars['Float']>;
  rolls?: Maybe<Array<PvpBetRollsHistoryItem>>;
  status: PvpRoundPlayerStatus;
  totalGamePayout?: Maybe<Scalars['Float']>;
  user: User;
  userId: Scalars['ID'];
  winRemainder?: Maybe<Scalars['Float']>;
  winUserItem?: Maybe<UserItem>;
  winUserItemId?: Maybe<Scalars['ID']>;
};

export enum PvpRoundPlayerStatus {
  Draw = 'DRAW',
  Exited = 'EXITED',
  Joined = 'JOINED',
  Lost = 'LOST',
  Refunded = 'REFUNDED',
  Waiting = 'WAITING',
  Won = 'WON'
}

export enum PvpRoundStatus {
  Cancelled = 'CANCELLED',
  Created = 'CREATED',
  Finished = 'FINISHED',
  Started = 'STARTED',
  WaitingForGameEnd = 'WAITING_FOR_GAME_END'
}

export type Query = {
  __typename?: 'Query';
  achievement?: Maybe<Achievement>;
  achievements: AchievementConnection;
  affiliateActiveCountInDateRange?: Maybe<AffiliateActiveCountResult>;
  affiliateAllTime?: Maybe<AffiliateAllTimeResult>;
  affiliateDailyEarnings?: Maybe<Array<Maybe<AffiliateEarningsResult>>>;
  affiliateLoanRequest?: Maybe<AffiliateLoanRequest>;
  affiliateLoanRequests: AffiliateLoanRequestConnection;
  affiliateMonthlyEarnings?: Maybe<Array<Maybe<AffiliateEarningsResult>>>;
  affiliateSearch: AffiliateSearchConnection;
  affiliateStatusCounts?: Maybe<AffiliateStatusCountResult>;
  affiliateTier?: Maybe<AffiliateTier>;
  affiliateTiers: AffiliateTierConnection;
  affiliateTotalEarnings?: Maybe<Array<Maybe<AffiliateEarningsResult>>>;
  asset?: Maybe<Asset>;
  assets: AssetConnection;
  auditLog?: Maybe<AuditLog>;
  auditLogs: AuditLogConnection;
  bet?: Maybe<Bet>;
  bets: BetConnection;
  box?: Maybe<Box>;
  boxItemVariantStats?: Maybe<Array<Maybe<BoxItemVariantStat>>>;
  boxOpening?: Maybe<BoxOpening>;
  boxOpenings: BoxOpeningConnection;
  /** @deprecated use drop cache resolver instead */
  boxOpeningsByTime?: Maybe<Array<Maybe<BoxOpening>>>;
  /** @deprecated use drop cache resolver instead */
  boxOpeningsByValue?: Maybe<Array<Maybe<BoxOpening>>>;
  boxStats?: Maybe<Array<Maybe<BoxStat>>>;
  boxes: BoxConnection;
  cachedGameBets: Array<Bet>;
  cachedLatestGames: Array<Game>;
  cachedMessages: MessageConnection;
  calendar?: Maybe<Calendar>;
  calendarEntries: CalendarEntryConnection;
  calendarEntry?: Maybe<CalendarEntry>;
  calendars: CalendarConnection;
  casinoGame?: Maybe<CasinoGame>;
  casinoGameLobbies: CasinoGameLobbyConnection;
  casinoGameLobby?: Maybe<CasinoGameLobby>;
  casinoGameProvider?: Maybe<CasinoGameProvider>;
  casinoGameProviderConfig?: Maybe<CasinoGameProviderConfig>;
  casinoGameProviderConfigs?: Maybe<CasinoGameProviderConfigConnection>;
  casinoGameProviderTotalGames?: Maybe<Array<Maybe<CasinoGameProviderTotalGamesPayload>>>;
  casinoGameProviders: CasinoGameProviderConnection;
  casinoGameRound?: Maybe<CasinoGameRound>;
  casinoGameRounds: CasinoGameRoundConnection;
  casinoGameSession?: Maybe<CasinoGameSession>;
  casinoGameSessions: CasinoGameSessionConnection;
  casinoGames: CasinoGameConnection;
  commitVersion?: Maybe<CommitVersion>;
  countries?: Maybe<Array<Maybe<Country>>>;
  countryDetected?: Maybe<Country>;
  crashBet?: Maybe<CrashBet>;
  crashBetItem?: Maybe<CrashBetItem>;
  crashBetItemVariants: CrashBetItemVariantConnection;
  crashBetItems: CrashBetItemConnection;
  crashBetStats: CrashBetStats;
  crashBets: CrashBetConnection;
  crashGame?: Maybe<CrashGame>;
  crashGames: CrashGameConnection;
  cronJob?: Maybe<CronJob>;
  cronJobs: CronJobConnection;
  cryptoAddress?: Maybe<CryptoAddress>;
  cryptoAddresses: CryptoAddressConnection;
  currentUser?: Maybe<User>;
  dashboard?: Maybe<Dashboard>;
  detectedMarket?: Maybe<Market>;
  diceBet?: Maybe<DiceBet>;
  diceBetJackpotEntries: Array<DiceBet>;
  diceBets: DiceBetConnection;
  digitalCode?: Maybe<DigitalCode>;
  digitalCodes: DigitalCodeConnection;
  document?: Maybe<Document>;
  documents: DocumentConnection;
  exchange?: Maybe<Exchange>;
  exchangeRate?: Maybe<ExchangeRate>;
  exchangeRates?: Maybe<ExchangeRates>;
  exchanges: ExchangeConnection;
  favouriteBox: FavouriteBox;
  game?: Maybe<Game>;
  gameJackpot?: Maybe<GameJackpot>;
  gameJackpotWinner?: Maybe<GameJackpotWinner>;
  gameJackpotWinners: GameJackpotWinnerConnection;
  gameJackpots: GameJackpotConnection;
  games: GameConnection;
  gemstoneBoostActivation?: Maybe<GemstoneBoostActivation>;
  gemstoneBoostActivations: GemstoneBoostActivationConnection;
  gemstoneBoostInfo: GemstoneBoostInfo;
  gemstoneGame?: Maybe<GemstoneGame>;
  gemstoneGameLeaderboard: GemstoneGameLeaderboard;
  gemstoneGames: GemstoneGameConnection;
  geoTrack?: Maybe<GeoTrack>;
  geoTrackSummary?: Maybe<GeoTrackSummary>;
  geoTrackUserSummary?: Maybe<GeoTrackUserSummary>;
  geoTracks: GeoTrackConnection;
  getAffiliateBlogPosts?: Maybe<AffiliateBlogPostsPayload>;
  getAffiliateImageUrl?: Maybe<AffiliateUrlPayload>;
  getAffiliateImageUrls?: Maybe<AffiliateUrlsPayload>;
  getAffiliateRanJobsByDay?: Maybe<Array<AffiliateRanJobsByDay>>;
  getCacheValue?: Maybe<Scalars['String']>;
  getDropCacheItems?: Maybe<DropCacheItemsPayload>;
  getEosBlock?: Maybe<Scalars['JSON']>;
  getEosChainInfo?: Maybe<Scalars['JSON']>;
  getEosCurrentSimpleBlock?: Maybe<Scalars['JSON']>;
  getEosSimpleBlock?: Maybe<Scalars['JSON']>;
  getParsedCacheValue?: Maybe<Scalars['JSON']>;
  getRefereeStatus: RefereeStatusResult;
  getTileOpeningRewardAmount: GetTileOpeningRewardAmountPayload;
  getUserTierAssetsStatuses?: Maybe<Array<Maybe<GetUserTierAssetsStatusesPayload>>>;
  giftCardOption?: Maybe<GiftCardOption>;
  giftCardOptions: GiftCardOptionConnection;
  giveaway?: Maybe<Giveaway>;
  giveaways: GiveawayConnection;
  inventoryItemVariants: Inventory;
  inviteCode?: Maybe<InviteCode>;
  inviteCodes: InviteCodeConnection;
  item?: Maybe<Item>;
  itemCategories: ItemCategoryConnection;
  itemCategory?: Maybe<ItemCategory>;
  itemVariant?: Maybe<ItemVariant>;
  itemVariantSizes?: Maybe<Array<Maybe<ItemVariantSize>>>;
  itemVariants: ItemVariantConnection;
  items: ItemConnection;
  jackpot?: Maybe<Jackpot>;
  jackpotLeaderboard: JackpotLeaderboardConnection;
  jackpotWinningTicket?: Maybe<JackpotWinningTicket>;
  jackpotWinningTickets?: Maybe<JackpotWinningTicketConnection>;
  jackpots: JackpotConnection;
  location?: Maybe<Location>;
  luckiestBoxOpening: LuckiestBoxOpening;
  market?: Maybe<Market>;
  markets: MarketConnection;
  matchBettingGame?: Maybe<MatchBettingGame>;
  matchBettingGames: MatchBettingGameConnection;
  matchBettingLeague?: Maybe<MatchBettingLeague>;
  matchBettingLeagues: MatchBettingLeagueConnection;
  matchBettingMarket?: Maybe<MatchBettingMarket>;
  matchBettingMarkets: MatchBettingMarketConnection;
  matchBettingMatch?: Maybe<MatchBettingMatch>;
  matchBettingMatches: MatchBettingMatchConnection;
  matchBettingPlayer?: Maybe<MatchBettingPlayer>;
  matchBettingPlayers: MatchBettingPlayerConnection;
  matchBettingSerie?: Maybe<MatchBettingSerie>;
  matchBettingSeries: MatchBettingSerieConnection;
  matchBettingSlip?: Maybe<MatchBettingSlip>;
  matchBettingSlips: MatchBettingSlipConnection;
  matchBettingTeam?: Maybe<MatchBettingTeam>;
  matchBettingTeams: MatchBettingTeamConnection;
  matchBettingTournament?: Maybe<MatchBettingTournament>;
  matchBettingTournaments: MatchBettingTournamentConnection;
  message?: Maybe<Message>;
  messages: MessageConnection;
  node?: Maybe<Node>;
  note?: Maybe<Note>;
  notes: NoteConnection;
  notification?: Maybe<Notification>;
  notificationMessage?: Maybe<NotificationMessage>;
  notificationMessages: NotificationMessageConnection;
  notifications: NotificationConnection;
  onlineCount?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  orderNote?: Maybe<OrderNote>;
  orderNotes: OrderNoteConnection;
  orders: OrderConnection;
  paymentOption?: Maybe<PaymentOption>;
  paymentOptions?: Maybe<Array<Maybe<PaymentOption>>>;
  plinkoBet?: Maybe<PlinkoBet>;
  plinkoBetSlots: PlinkoBetSlotsPayload;
  plinkoBets: PlinkoBetConnection;
  poll?: Maybe<Poll>;
  pollOption?: Maybe<PollOption>;
  pollOptions: PollOptionConnection;
  polls: PollConnection;
  promoCode?: Maybe<PromoCode>;
  promoCodeTimer: PromoCodeTimer;
  promoCodes: PromoCodeConnection;
  promotions?: Maybe<Array<Promotion>>;
  proxies: ProxyConnection;
  proxy?: Maybe<Proxy>;
  pvpBet?: Maybe<PvpBet>;
  pvpBets: PvpBetConnection;
  pvpBot?: Maybe<PvpBot>;
  pvpBots: PvpBotConnection;
  pvpGame?: Maybe<PvpGame>;
  pvpGames: PvpGameConnection;
  pvpRound?: Maybe<PvpRound>;
  pvpRounds: PvpRoundConnection;
  rankUpGame?: Maybe<RankUpGame>;
  rankUpGames?: Maybe<RankUpGameConnection>;
  refereeActivity?: Maybe<RefereeActivityResult>;
  refereeDailyOrHourlyActivity?: Maybe<RefereeDailyActivityResult>;
  retailer?: Maybe<RetailerType>;
  retailerDeliveryStats?: Maybe<RetailerDeliveryStatsResponse>;
  retailers: RetailerConnection;
  roll?: Maybe<Roll>;
  rollHistory: Array<Maybe<RollHistory>>;
  rolls: RollConnection;
  seed?: Maybe<Seed>;
  seeds: SeedConnection;
  sessionHash?: Maybe<Scalars['String']>;
  setting?: Maybe<Setting>;
  settings?: Maybe<Array<Setting>>;
  settingsByKeys?: Maybe<Array<Setting>>;
  socialStories: SocialStoryConnection;
  socialStory: SocialStory;
  steam2FACode?: Maybe<Scalars['String']>;
  steamAsset?: Maybe<SteamAsset>;
  steamAssets: SteamAssetConnection;
  steamBot?: Maybe<SteamBot>;
  steamBots: SteamBotConnection;
  steamInventory: Scalars['JSON'];
  steamOffer?: Maybe<SteamOffer>;
  steamOfferItemVariant?: Maybe<SteamOfferItemVariant>;
  steamOfferItemVariants: SteamOfferItemVariantConnection;
  steamOffers: SteamOfferConnection;
  steamUserTradeHistory: SteamUserTradeHistory;
  tag?: Maybe<Tag>;
  tags: TagConnection;
  team?: Maybe<Team>;
  teams: TeamConnection;
  ticket?: Maybe<Ticket>;
  tickets: TicketConnection;
  tileOpening?: Maybe<TileOpening>;
  tileOpenings: TileOpeningConnection;
  tileSetting?: Maybe<TileSetting>;
  tileSettings: TileSettingConnection;
  time?: Maybe<Scalars['SequelizeDate']>;
  totalCommisionGivenAway: TotalCommisionGivenAwayPayload;
  trade?: Maybe<Trade>;
  tradeItem?: Maybe<TradeItem>;
  tradeItems: TradeItemConnection;
  trades: TradeConnection;
  transaction?: Maybe<Transaction>;
  transactions: TransactionConnection;
  trigger?: Maybe<Trigger>;
  triggers: TriggerConnection;
  user?: Maybe<User>;
  userAchievement?: Maybe<UserAchievement>;
  userAchievements?: Maybe<UserAchievementConnection>;
  userAddress?: Maybe<UserAddress>;
  userAddresses: UserAddressConnection;
  userAsset?: Maybe<UserAsset>;
  userAssets?: Maybe<UserAssetConnection>;
  userBox?: Maybe<UserBox>;
  userBoxes: UserBoxConnection;
  userCommunication?: Maybe<UserCommunication>;
  userCommunications: UserCommunicationConnection;
  userGiveaway?: Maybe<UserGiveaway>;
  userGiveaways: UserGiveawayConnection;
  userItem?: Maybe<UserItem>;
  userItems: UserItemConnection;
  userPollOption?: Maybe<UserPollOption>;
  userPollOptions: UserPollOptionConnection;
  userProgressChange?: Maybe<UserProgressChange>;
  userProgressChanges?: Maybe<UserProgressChangeConnection>;
  userProgressChangesSummary: UserProgressChangesSummaryConnection;
  userPromoCodes: UserPromoCodeConnection;
  userRewards?: Maybe<UserReward>;
  userStat?: Maybe<UserStat>;
  userStatistics?: Maybe<UserStatistics>;
  userStats: UserStatConnection;
  userTier?: Maybe<UserTier>;
  userTierAsset?: Maybe<UserTierAsset>;
  userTierAssets?: Maybe<UserTierAssetConnection>;
  userTiers: UserTierConnection;
  users: UserConnection;
  waitingListEmail?: Maybe<EmailWaitingList>;
  waitingListEmails: EmailWaitingListConnection;
  wallet?: Maybe<Wallet>;
  walletChange?: Maybe<WalletChange>;
  walletChanges: WalletChangeConnection;
  walletChangesSummary: WalletChangesSummaryConnection;
  wallets: WalletConnection;
  waxPeerItems: WaxPeerItemConnection;
  waxPeerTrade?: Maybe<WaxPeerTrade>;
  waxPeerTrades: WaxPeerTradeConnection;
  wishlist?: Maybe<Wishlist>;
  wishlists: WishlistConnection;
  withdrawalRequest?: Maybe<WithdrawalRequest>;
  withdrawalRequests: WithdrawalRequestConnection;
  zbtMarketplaceItems: ZbtMarketplaceItemConnection;
  zbtTrade?: Maybe<ZbtTrade>;
  zbtTrades: ZbtTradeConnection;
  zincOrder?: Maybe<ZincOrder>;
  zincOrders: ZincOrderConnection;
  zincProductSearch: ZincProductSearchPayload;
};


export type QueryAchievementArgs = {
  id: Scalars['ID'];
};


export type QueryAchievementsArgs = {
  achievementIds?: InputMaybe<Array<Scalars['ID']>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<AchievementOrderBy>>>;
  types?: InputMaybe<Array<AchievementType>>;
};


export type QueryAffiliateActiveCountInDateRangeArgs = {
  input?: InputMaybe<AffiliateActiveCountInput>;
};


export type QueryAffiliateAllTimeArgs = {
  input?: InputMaybe<AffiliateAllTimeInput>;
};


export type QueryAffiliateDailyEarningsArgs = {
  input?: InputMaybe<AffiliateEarningsInput>;
};


export type QueryAffiliateLoanRequestArgs = {
  id: Scalars['ID'];
};


export type QueryAffiliateLoanRequestsArgs = {
  input?: InputMaybe<AffiliateLoanRequestArgs>;
};


export type QueryAffiliateMonthlyEarningsArgs = {
  input?: InputMaybe<AffiliateEarningsInput>;
};


export type QueryAffiliateSearchArgs = {
  input?: InputMaybe<AffiliateSearchInputs>;
};


export type QueryAffiliateStatusCountsArgs = {
  input?: InputMaybe<AffiliateStatusCountsInput>;
};


export type QueryAffiliateTierArgs = {
  id: Scalars['ID'];
};


export type QueryAffiliateTiersArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorAffiliateTierId?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<AffiliateTierOrderBy>>>;
};


export type QueryAffiliateTotalEarningsArgs = {
  input?: InputMaybe<AffiliateEarningsInput>;
};


export type QueryAssetArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<AssetOrderBy>>>;
};


export type QueryAuditLogArgs = {
  id: Scalars['ID'];
};


export type QueryAuditLogsArgs = {
  actions?: InputMaybe<Array<AuditLogAction>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['Int']>;
  externalModel?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuditLogOrderBy>>>;
  userIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryBetArgs = {
  id: Scalars['ID'];
};


export type QueryBetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  gameId?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  orderBy?: InputMaybe<Array<InputMaybe<BetOrderBy>>>;
  selection?: InputMaybe<Scalars['Int']>;
  selections?: InputMaybe<Array<Scalars['Int']>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryBoxArgs = {
  id?: InputMaybe<Scalars['ID']>;
  marketId?: InputMaybe<Scalars['ID']>;
  marketSlug?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryBoxItemVariantStatsArgs = {
  boxId: Scalars['ID'];
  combineAncestors?: InputMaybe<Scalars['Boolean']>;
  excluded?: InputMaybe<Scalars['Boolean']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type QueryBoxOpeningArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBoxOpeningsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorBoxId?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['String']>;
  boxId?: InputMaybe<Scalars['ID']>;
  boxSlotTypes?: InputMaybe<Array<BoxSlotType>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  hasPvpGame?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  maxItemValue?: InputMaybe<Scalars['Float']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  minItemValue?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<BoxOpeningOrderBy>>>;
  pvpGameId?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryBoxOpeningsByTimeArgs = {
  ancestorBoxId?: InputMaybe<Scalars['ID']>;
  boxSlug?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['PaginationAmount']>;
};


export type QueryBoxOpeningsByValueArgs = {
  ancestorBoxId?: InputMaybe<Scalars['ID']>;
  boxSlug?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['PaginationAmount']>;
};


export type QueryBoxStatsArgs = {
  combineAncestors?: InputMaybe<Scalars['Boolean']>;
  excludeAuthenticated?: InputMaybe<Scalars['Boolean']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  minValue?: InputMaybe<Scalars['Float']>;
  openable?: InputMaybe<Scalars['Boolean']>;
  purchasable?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBoxesArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorBoxId?: InputMaybe<Scalars['ID']>;
  availableFrom?: InputMaybe<Scalars['SequelizeDate']>;
  availableUntil?: InputMaybe<Scalars['SequelizeDate']>;
  before?: InputMaybe<Scalars['String']>;
  boxName?: InputMaybe<Scalars['String']>;
  dailyLimited?: InputMaybe<Scalars['Boolean']>;
  discounted?: InputMaybe<Scalars['Boolean']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  excludeTags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  free?: InputMaybe<Scalars['Boolean']>;
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  itemId?: InputMaybe<Scalars['ID']>;
  itemIds?: InputMaybe<Array<Scalars['ID']>>;
  itemName?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  marketId?: InputMaybe<Scalars['ID']>;
  marketSlug?: InputMaybe<Scalars['String']>;
  maxCost?: InputMaybe<Scalars['Float']>;
  maxValue?: InputMaybe<Scalars['Float']>;
  minCost?: InputMaybe<Scalars['Float']>;
  minLevelRequired?: InputMaybe<Scalars['Int']>;
  minValue?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  openable?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Array<InputMaybe<BoxOrderBy>>>;
  purchasable?: InputMaybe<Scalars['Boolean']>;
  sellable?: InputMaybe<Scalars['Boolean']>;
  slotTypes?: InputMaybe<Array<BoxSlotType>>;
  statsProcessedAt?: InputMaybe<Scalars['SequelizeDate']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<BoxType>;
  walletRestrictions?: InputMaybe<Array<InputMaybe<WalletType>>>;
};


export type QueryCachedGameBetsArgs = {
  gameId: Scalars['ID'];
};


export type QueryCachedLatestGamesArgs = {
  gameId?: InputMaybe<Scalars['ID']>;
  last: Scalars['Int'];
};


export type QueryCachedMessagesArgs = {
  channels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
};


export type QueryCalendarArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCalendarEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  calendarId?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<CalendarEntryOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryCalendarEntryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCalendarsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<CalendarOrderBy>>>;
};


export type QueryCasinoGameArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryCasinoGameLobbiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<CasinoGameLobbyOrderBy>>>;
};


export type QueryCasinoGameLobbyArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryCasinoGameProviderArgs = {
  id: Scalars['ID'];
};


export type QueryCasinoGameProviderConfigArgs = {
  id: Scalars['ID'];
};


export type QueryCasinoGameProviderConfigsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  devices?: InputMaybe<Array<InputMaybe<Device>>>;
  featureGroup?: InputMaybe<Array<InputMaybe<CasinoGameFeatureGroup>>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<CasinoGameProviderOrderBy>>>;
  volatility?: InputMaybe<Array<InputMaybe<CasinoGameVolatilityRating>>>;
};


export type QueryCasinoGameProviderTotalGamesArgs = {
  lobbySlug?: InputMaybe<Scalars['String']>;
  partialSearch?: InputMaybe<Scalars['String']>;
  providers?: InputMaybe<Array<CasinoGameProviderCode>>;
};


export type QueryCasinoGameProvidersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<CasinoGameProviderOrderBy>>>;
  subProviders?: InputMaybe<Array<InputMaybe<CasinoGameProviderCode>>>;
};


export type QueryCasinoGameRoundArgs = {
  id: Scalars['ID'];
};


export type QueryCasinoGameRoundsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  fromDate?: InputMaybe<Scalars['SequelizeDate']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<CasinoGameRoundOrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  toDate?: InputMaybe<Scalars['SequelizeDate']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryCasinoGameSessionArgs = {
  id: Scalars['ID'];
};


export type QueryCasinoGameSessionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['SequelizeDate']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<CasinoGameSessionOrderBy>>>;
  startDate?: InputMaybe<Scalars['SequelizeDate']>;
  userIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type QueryCasinoGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<InputMaybe<CasinoGameCategory>>>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  isLive?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<CasinoGameOrderBy>>>;
  slug?: InputMaybe<Scalars['String']>;
  studios?: InputMaybe<Array<InputMaybe<CasinoGameProviderCode>>>;
  title?: InputMaybe<Scalars['String']>;
};


export type QueryCrashBetArgs = {
  id: Scalars['ID'];
};


export type QueryCrashBetItemArgs = {
  id: Scalars['ID'];
};


export type QueryCrashBetItemVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  marketId: Scalars['ID'];
  minValue: Scalars['Float'];
};


export type QueryCrashBetItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<CrashBetItemOrderBy>>>;
};


export type QueryCrashBetStatsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  userId: Scalars['ID'];
};


export type QueryCrashBetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  gameId?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<CrashBetOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryCrashGameArgs = {
  id: Scalars['ID'];
};


export type QueryCrashGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<CrashGameOrderBy>>>;
  status?: InputMaybe<CrashGameStatus>;
};


export type QueryCronJobArgs = {
  id: Scalars['ID'];
};


export type QueryCronJobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<CronJobOrderBy>>>;
};


export type QueryCryptoAddressArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCryptoAddressesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<CryptoAddressOrderBy>>>;
  paymentOptionIds?: InputMaybe<Array<Scalars['ID']>>;
  userIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryDiceBetArgs = {
  id: Scalars['ID'];
};


export type QueryDiceBetJackpotEntriesArgs = {
  createdAtMaxDate: Scalars['SequelizeDate'];
  createdAtMinDate: Scalars['SequelizeDate'];
  first: Scalars['PaginationAmount'];
  gameType: DiceGameType;
  minAmount: Scalars['Float'];
  minTotalPayout: Scalars['Float'];
};


export type QueryDiceBetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  createdAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  gameTypes?: InputMaybe<Array<DiceGameType>>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  maxAmount?: InputMaybe<Scalars['Float']>;
  maxProfit?: InputMaybe<Scalars['Float']>;
  maxTotalPayout?: InputMaybe<Scalars['Float']>;
  minAmount?: InputMaybe<Scalars['Float']>;
  minProfit?: InputMaybe<Scalars['Float']>;
  minTotalPayout?: InputMaybe<Scalars['Float']>;
  orderBy?: InputMaybe<Array<InputMaybe<DiceBetOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryDigitalCodeArgs = {
  id: Scalars['ID'];
};


export type QueryDigitalCodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  availableOnly?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  itemVariantId?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<DigitalCodeOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryDocumentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<DocumentOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryExchangeArgs = {
  id: Scalars['ID'];
};


export type QueryExchangeRateArgs = {
  source?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<Scalars['String']>;
};


export type QueryExchangeRatesArgs = {
  date?: InputMaybe<Scalars['SequelizeDate']>;
  source?: InputMaybe<Scalars['String']>;
  targets?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryExchangesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<ExchangeOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryFavouriteBoxArgs = {
  marketId?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryGameArgs = {
  id: Scalars['ID'];
};


export type QueryGameJackpotArgs = {
  id: Scalars['ID'];
};


export type QueryGameJackpotWinnerArgs = {
  id: Scalars['ID'];
};


export type QueryGameJackpotWinnersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  gameId?: InputMaybe<Scalars['String']>;
  gameJackpotId?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<GameJackpotWinnerOrderBy>>>;
};


export type QueryGameJackpotsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<GameJackpotOrderBy>>>;
};


export type QueryGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  maxRollId?: InputMaybe<Scalars['ID']>;
  minRollId?: InputMaybe<Scalars['ID']>;
  orderBy?: InputMaybe<Array<InputMaybe<GameOrderBy>>>;
  status?: InputMaybe<GameStatus>;
};


export type QueryGemstoneBoostActivationArgs = {
  id: Scalars['ID'];
};


export type QueryGemstoneBoostActivationsArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  gemstoneBoostId?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<GemstoneBoostActivationOrderBy>>>;
  teamIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryGemstoneBoostInfoArgs = {
  gemstoneBoostId?: InputMaybe<Scalars['ID']>;
  teamIds: Array<Scalars['ID']>;
  walletType: WalletType;
};


export type QueryGemstoneGameArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGemstoneGameLeaderboardArgs = {
  createdAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  createdAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  limit: Scalars['Int'];
  teamId?: InputMaybe<Scalars['ID']>;
  useCache?: InputMaybe<Scalars['Boolean']>;
  walletType: WalletType;
};


export type QueryGemstoneGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  createdAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  externalId?: InputMaybe<Scalars['ID']>;
  externalModel?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  maxAmount?: InputMaybe<Scalars['Float']>;
  maxBet?: InputMaybe<Scalars['Float']>;
  minAmount?: InputMaybe<Scalars['Float']>;
  minBet?: InputMaybe<Scalars['Float']>;
  orderBy?: InputMaybe<Array<InputMaybe<GemstoneGameOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
  walletType?: InputMaybe<WalletType>;
};


export type QueryGeoTrackArgs = {
  id: Scalars['ID'];
};


export type QueryGeoTrackSummaryArgs = {
  date?: InputMaybe<Scalars['SequelizeDate']>;
};


export type QueryGeoTrackUserSummaryArgs = {
  date?: InputMaybe<Scalars['SequelizeDate']>;
  userId: Scalars['ID'];
};


export type QueryGeoTracksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  countries?: InputMaybe<Array<Scalars['String']>>;
  createdAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  createdAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  ips?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<GeoTrackOrderBy>>>;
  userIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryGetAffiliateBlogPostsArgs = {
  input?: InputMaybe<AffiliateBlogInput>;
};


export type QueryGetAffiliateImageUrlArgs = {
  input?: InputMaybe<AffiliatePromoImageIdentifier>;
};


export type QueryGetAffiliateImageUrlsArgs = {
  input?: InputMaybe<AffiliateUserIdentifier>;
};


export type QueryGetAffiliateRanJobsByDayArgs = {
  jobType?: InputMaybe<AffiliateReportJobType>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGetCacheValueArgs = {
  key: Scalars['String'];
};


export type QueryGetDropCacheItemsArgs = {
  input?: InputMaybe<GetDropCacheItemsInput>;
};


export type QueryGetEosBlockArgs = {
  blockNumberOrId: Scalars['String'];
};


export type QueryGetEosSimpleBlockArgs = {
  blockNumber: Scalars['Int'];
};


export type QueryGetParsedCacheValueArgs = {
  key: Scalars['String'];
};


export type QueryGetRefereeStatusArgs = {
  input?: InputMaybe<RefereeStatusInput>;
};


export type QueryGetTileOpeningRewardAmountArgs = {
  userId: Scalars['ID'];
};


export type QueryGetUserTierAssetsStatusesArgs = {
  tierRank: Scalars['ID'];
};


export type QueryGiftCardOptionArgs = {
  id: Scalars['ID'];
};


export type QueryGiftCardOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<GiftCardOptionOrderBy>>>;
  providers?: InputMaybe<Array<GiftCardProvider>>;
};


export type QueryGiveawayArgs = {
  id: Scalars['ID'];
};


export type QueryGiveawaysArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<GiveawayOrderBy>>>;
  statuses?: InputMaybe<Array<GiveawayStatus>>;
};


export type QueryInventoryItemVariantsArgs = {
  allowCached?: InputMaybe<Scalars['Boolean']>;
  steamAppName?: InputMaybe<SteamAppName>;
  steamId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryInviteCodeArgs = {
  id: Scalars['ID'];
};


export type QueryInviteCodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<InviteCodeOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryItemArgs = {
  id: Scalars['ID'];
};


export type QueryItemCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<ItemCategoryOrderBy>>>;
};


export type QueryItemCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryItemVariantArgs = {
  id: Scalars['ID'];
};


export type QueryItemVariantSizesArgs = {
  allowCached?: InputMaybe<Scalars['Boolean']>;
  categoryId?: InputMaybe<Scalars['ID']>;
  orderBy?: InputMaybe<ItemVariantSizeOrderBy>;
};


export type QueryItemVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  canBuy?: InputMaybe<Scalars['Boolean']>;
  categoryId?: InputMaybe<Scalars['ID']>;
  depositable?: InputMaybe<Scalars['Boolean']>;
  distinctDisplayValues?: InputMaybe<Scalars['Boolean']>;
  distinctValues?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  itemId?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  marketId?: InputMaybe<Scalars['ID']>;
  maxAvailableAt?: InputMaybe<Scalars['SequelizeDate']>;
  maxExchangeRate?: InputMaybe<Scalars['Float']>;
  maxMarkup?: InputMaybe<Scalars['Float']>;
  maxValue?: InputMaybe<Scalars['Float']>;
  maxValueAfterMarkup?: InputMaybe<Scalars['Float']>;
  maxValueUpdatedAt?: InputMaybe<Scalars['SequelizeDate']>;
  minAvailableAt?: InputMaybe<Scalars['SequelizeDate']>;
  minExchangeRate?: InputMaybe<Scalars['Float']>;
  minMarkup?: InputMaybe<Scalars['Float']>;
  minTotalRequested?: InputMaybe<Scalars['Int']>;
  minTotalUnfulfilled?: InputMaybe<Scalars['Int']>;
  minValue?: InputMaybe<Scalars['Float']>;
  minValueAfterMarkup?: InputMaybe<Scalars['Float']>;
  minValueUpdatedAt?: InputMaybe<Scalars['SequelizeDate']>;
  name?: InputMaybe<Scalars['String']>;
  obtainable?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Array<InputMaybe<ItemVariantOrderBy>>>;
  purchasable?: InputMaybe<ItemPurchasable>;
  retailer?: InputMaybe<Retailer>;
  retailerIds?: InputMaybe<Array<Scalars['ID']>>;
  retailers?: InputMaybe<Array<Retailer>>;
  size?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ItemType>;
  usable?: InputMaybe<Scalars['Boolean']>;
  withdrawable?: InputMaybe<Scalars['Boolean']>;
};


export type QueryItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  boxIds?: InputMaybe<Array<Scalars['ID']>>;
  categoryId?: InputMaybe<Scalars['ID']>;
  containedInAnyBox?: InputMaybe<Scalars['Boolean']>;
  distinctDisplayValues?: InputMaybe<Scalars['Boolean']>;
  distinctValues?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  marketId?: InputMaybe<Scalars['ID']>;
  maxValue?: InputMaybe<Scalars['Float']>;
  maxValueUpdatedAt?: InputMaybe<Scalars['SequelizeDate']>;
  minValue?: InputMaybe<Scalars['Float']>;
  minValueUpdatedAt?: InputMaybe<Scalars['SequelizeDate']>;
  name?: InputMaybe<Scalars['String']>;
  obtainable?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Array<InputMaybe<ItemOrderBy>>>;
  rarity?: InputMaybe<Scalars['String']>;
  retailerIds?: InputMaybe<Array<Scalars['ID']>>;
  retailers?: InputMaybe<Array<Retailer>>;
  tagIds?: InputMaybe<Array<ItemTagInput>>;
  type?: InputMaybe<ItemType>;
  usable?: InputMaybe<Scalars['Boolean']>;
  withdrawable?: InputMaybe<Scalars['Boolean']>;
};


export type QueryJackpotArgs = {
  id: Scalars['ID'];
};


export type QueryJackpotLeaderboardArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  jackpotId?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};


export type QueryJackpotWinningTicketArgs = {
  id: Scalars['ID'];
};


export type QueryJackpotWinningTicketsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  jackpotId?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<JackpotWinningTicketOrderBy>>>;
};


export type QueryJackpotsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<JackpotOrderBy>>>;
  payoutType?: InputMaybe<JackpotPayoutType>;
  won?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLuckiestBoxOpeningArgs = {
  marketId?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryMarketArgs = {
  id: Scalars['ID'];
};


export type QueryMarketsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<MarketOrderBy>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryMatchBettingGameArgs = {
  id: Scalars['ID'];
};


export type QueryMatchBettingGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  externalIds?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  gameIds?: InputMaybe<Array<Scalars['ID']>>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  matchIds?: InputMaybe<Array<Scalars['ID']>>;
  orderBy?: InputMaybe<Array<InputMaybe<MatchBettingGameOrderBy>>>;
  providers?: InputMaybe<Array<MatchBettingProvider>>;
  statuses?: InputMaybe<Array<MatchBettingGameStatus>>;
  videoGames?: InputMaybe<Array<MatchBettingVideoGame>>;
};


export type QueryMatchBettingLeagueArgs = {
  id: Scalars['ID'];
};


export type QueryMatchBettingLeaguesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  externalIds?: InputMaybe<Array<Scalars['String']>>;
  externalSlugs?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  leagueIds?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<MatchBettingLeagueOrderBy>>>;
  providers?: InputMaybe<Array<MatchBettingProvider>>;
  videoGames?: InputMaybe<Array<MatchBettingVideoGame>>;
};


export type QueryMatchBettingMarketArgs = {
  id: Scalars['ID'];
};


export type QueryMatchBettingMarketsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  externalIds?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  gameIds?: InputMaybe<Array<Scalars['ID']>>;
  hasRollback?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  marketIds?: InputMaybe<Array<Scalars['ID']>>;
  matchIds?: InputMaybe<Array<Scalars['ID']>>;
  matchName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<MatchBettingMarketOrderBy>>>;
  providers?: InputMaybe<Array<MatchBettingProvider>>;
  statuses?: InputMaybe<Array<MatchBettingMarketStatus>>;
  types?: InputMaybe<Array<MatchBettingMarketType>>;
  videoGames?: InputMaybe<Array<MatchBettingVideoGame>>;
};


export type QueryMatchBettingMatchArgs = {
  id: Scalars['ID'];
};


export type QueryMatchBettingMatchesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  externalIds?: InputMaybe<Array<Scalars['String']>>;
  externalSlugs?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  leagueIds?: InputMaybe<Array<Scalars['ID']>>;
  matchBettingMarketIds?: InputMaybe<Array<Scalars['ID']>>;
  matchIds?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<MatchBettingMatchOrderBy>>>;
  providers?: InputMaybe<Array<MatchBettingProvider>>;
  scheduledAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  scheduledAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  serieIds?: InputMaybe<Array<Scalars['ID']>>;
  statuses?: InputMaybe<Array<MatchBettingMatchStatus>>;
  tournamentIds?: InputMaybe<Array<Scalars['ID']>>;
  tournamentName?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<MatchBettingMatchType>>;
  videoGames?: InputMaybe<Array<MatchBettingVideoGame>>;
};


export type QueryMatchBettingPlayerArgs = {
  id: Scalars['ID'];
};


export type QueryMatchBettingPlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  currentTeamIds?: InputMaybe<Array<Scalars['ID']>>;
  externalIds?: InputMaybe<Array<Scalars['String']>>;
  externalSlugs?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<MatchBettingPlayerOrderBy>>>;
  playerIds?: InputMaybe<Array<Scalars['ID']>>;
  providers?: InputMaybe<Array<MatchBettingProvider>>;
};


export type QueryMatchBettingSerieArgs = {
  id: Scalars['ID'];
};


export type QueryMatchBettingSeriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  externalIds?: InputMaybe<Array<Scalars['String']>>;
  externalSlugs?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  fullName?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  leagueIds?: InputMaybe<Array<Scalars['ID']>>;
  orderBy?: InputMaybe<Array<InputMaybe<MatchBettingSerieOrderBy>>>;
  providers?: InputMaybe<Array<MatchBettingProvider>>;
  serieIds?: InputMaybe<Array<Scalars['ID']>>;
  videoGames?: InputMaybe<Array<MatchBettingVideoGame>>;
};


export type QueryMatchBettingSlipArgs = {
  id: Scalars['ID'];
};


export type QueryMatchBettingSlipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  createdAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  hasRollback?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  matchBettingGameId?: InputMaybe<Scalars['ID']>;
  matchBettingMarketId?: InputMaybe<Scalars['ID']>;
  matchBettingMarketName?: InputMaybe<Scalars['String']>;
  matchBettingMatchId?: InputMaybe<Scalars['ID']>;
  matchBettingMatchName?: InputMaybe<Scalars['String']>;
  matchBettingTournamentId?: InputMaybe<Scalars['ID']>;
  matchBettingTournamentName?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<MatchBettingSlipOrderBy>>>;
  providers?: InputMaybe<Array<MatchBettingProvider>>;
  slipIds?: InputMaybe<Array<Scalars['ID']>>;
  statuses?: InputMaybe<Array<MatchBettingSlipStatus>>;
  types?: InputMaybe<Array<MatchBettingSlipType>>;
  userIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryMatchBettingTeamArgs = {
  id: Scalars['ID'];
};


export type QueryMatchBettingTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  externalIds?: InputMaybe<Array<Scalars['String']>>;
  externalSlugs?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<MatchBettingTeamOrderBy>>>;
  providers?: InputMaybe<Array<MatchBettingProvider>>;
  teamIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryMatchBettingTournamentArgs = {
  id: Scalars['ID'];
};


export type QueryMatchBettingTournamentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  externalIds?: InputMaybe<Array<Scalars['String']>>;
  externalSlugs?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  leagueIds?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<MatchBettingTournamentOrderBy>>>;
  providers?: InputMaybe<Array<MatchBettingProvider>>;
  serieIds?: InputMaybe<Array<Scalars['ID']>>;
  tournamentIds?: InputMaybe<Array<Scalars['ID']>>;
  videoGames?: InputMaybe<Array<MatchBettingVideoGame>>;
};


export type QueryMessageArgs = {
  id: Scalars['ID'];
};


export type QueryMessagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  channels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<MessageOrderBy>>>;
  showDeleted?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNoteArgs = {
  id: Scalars['ID'];
};


export type QueryNotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  creatorId?: InputMaybe<Scalars['ID']>;
  externalId?: InputMaybe<Scalars['ID']>;
  externalModel?: InputMaybe<ExternalModel>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<NoteOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryNotificationArgs = {
  id: Scalars['ID'];
};


export type QueryNotificationMessageArgs = {
  id: Scalars['ID'];
};


export type QueryNotificationMessagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  notificationId?: InputMaybe<Scalars['ID']>;
  notificationOwnerId?: InputMaybe<Scalars['ID']>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationMessageOrderBy>>>;
  unreadOnly?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['Int']>;
  externalModel?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationOrderBy>>>;
  type?: InputMaybe<NotificationType>;
  unreadOnly?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['ID']>;
  withMessages?: InputMaybe<Scalars['Boolean']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrderNoteArgs = {
  id: Scalars['ID'];
};


export type QueryOrderNotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  creatorId?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderNoteOrderBy>>>;
  orderId: Scalars['ID'];
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  createdAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  creatorId?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  itemName?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderOrderBy>>>;
  retailer?: InputMaybe<Retailer>;
  retailerId?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentOptionArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentOptionsArgs = {
  action?: InputMaybe<PaymentOptionAction>;
  countryCode?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPlinkoBetArgs = {
  id: Scalars['ID'];
};


export type QueryPlinkoBetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  bigWin?: InputMaybe<Scalars['Boolean']>;
  createdAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  createdAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  maxBet?: InputMaybe<Scalars['Float']>;
  maxTotalBet?: InputMaybe<Scalars['Float']>;
  maxTotalPayout?: InputMaybe<Scalars['Float']>;
  maxUserProfit?: InputMaybe<Scalars['Float']>;
  minBet?: InputMaybe<Scalars['Float']>;
  minTotalBet?: InputMaybe<Scalars['Float']>;
  minTotalPayout?: InputMaybe<Scalars['Float']>;
  minUserProfit?: InputMaybe<Scalars['Float']>;
  orderBy?: InputMaybe<Array<InputMaybe<PlinkoBetOrderBy>>>;
  riskModes?: InputMaybe<Array<PlinkoBetRiskMode>>;
  userIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryPollArgs = {
  id: Scalars['ID'];
};


export type QueryPollOptionArgs = {
  id: Scalars['ID'];
};


export type QueryPollOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<PollOptionOrderBy>>>;
  pollId?: InputMaybe<Scalars['ID']>;
};


export type QueryPollsArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<PollOrderBy>>>;
  status?: InputMaybe<PollStatus>;
  userLevel?: InputMaybe<Scalars['Int']>;
};


export type QueryPromoCodeArgs = {
  id: Scalars['ID'];
};


export type QueryPromoCodeTimerArgs = {
  amount: Scalars['Float'];
  code: Scalars['String'];
};


export type QueryPromoCodesArgs = {
  affiliateUserId?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  expired?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  marketId?: InputMaybe<Scalars['ID']>;
  orderBy?: InputMaybe<Array<InputMaybe<PromoCodeOrderBy>>>;
  type?: InputMaybe<PromoCodeType>;
  walletType?: InputMaybe<WalletType>;
};


export type QueryProxiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<ProxyOrderBy>>>;
};


export type QueryProxyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPvpBetArgs = {
  id: Scalars['ID'];
};


export type QueryPvpBetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  bigWin?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['PaginationAmountLarge']>;
  gameType?: InputMaybe<PvpGameType>;
  gameTypes?: InputMaybe<Array<PvpGameType>>;
  last?: InputMaybe<Scalars['PaginationAmountLarge']>;
  orderBy?: InputMaybe<Array<InputMaybe<PvpBetOrderBy>>>;
  pvpBetId?: InputMaybe<Scalars['ID']>;
  pvpGameId?: InputMaybe<Scalars['ID']>;
  pvpRoundId?: InputMaybe<Scalars['ID']>;
  statuses?: InputMaybe<Array<PvpBetStatus>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryPvpBotArgs = {
  id: Scalars['ID'];
};


export type QueryPvpBotsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  currencies?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<PvpBotOrderBy>>>;
  pvpBotIds?: InputMaybe<Array<Scalars['ID']>>;
  statuses?: InputMaybe<Array<PvpBotStatus>>;
  userIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryPvpGameArgs = {
  id: Scalars['ID'];
};


export type QueryPvpGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  createdAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  hasPvpBot?: InputMaybe<Scalars['Boolean']>;
  isMultiplierBoxGame?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  multiplierModes?: InputMaybe<Array<PvpGameMultiplierMode>>;
  orderBy?: InputMaybe<Array<InputMaybe<PvpGameOrderBy>>>;
  pvpGameId?: InputMaybe<Scalars['ID']>;
  statuses?: InputMaybe<Array<PvpGameStatus>>;
  strategies?: InputMaybe<Array<PvpGameStrategy>>;
  type?: InputMaybe<PvpGameType>;
  types?: InputMaybe<Array<PvpGameType>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryPvpRoundArgs = {
  id: Scalars['ID'];
};


export type QueryPvpRoundsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  gameType?: InputMaybe<PvpGameType>;
  gameTypes?: InputMaybe<Array<PvpGameType>>;
  hasPvpBot?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  minBiggestWinValue?: InputMaybe<Scalars['Float']>;
  orderBy?: InputMaybe<Array<InputMaybe<PvpRoundOrderBy>>>;
  pvpGameId?: InputMaybe<Scalars['ID']>;
  pvpRoundId?: InputMaybe<Scalars['ID']>;
  statuses?: InputMaybe<Array<PvpRoundStatus>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryRankUpGameArgs = {
  id: Scalars['ID'];
};


export type QueryRankUpGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  id?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<RankUpGameOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryRefereeActivityArgs = {
  input: RefereeActivityInput;
};


export type QueryRefereeDailyOrHourlyActivityArgs = {
  input?: InputMaybe<RefereeDailyActivityInput>;
};


export type QueryRetailerArgs = {
  id: Scalars['ID'];
};


export type QueryRetailerDeliveryStatsArgs = {
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
};


export type QueryRetailersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<RetailerOrderBy>>>;
};


export type QueryRollArgs = {
  id: Scalars['ID'];
};


export type QueryRollHistoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  game?: InputMaybe<GameType>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<RollOrderBy>;
};


export type QueryRollsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  game?: InputMaybe<GameType>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<RollOrderBy>>>;
};


export type QuerySeedArgs = {
  id: Scalars['ID'];
};


export type QuerySeedsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<SeedOrderBy>>>;
  type?: InputMaybe<SeedType>;
  userId: Scalars['ID'];
};


export type QuerySettingArgs = {
  key: Scalars['String'];
};


export type QuerySettingsByKeysArgs = {
  keys: Array<InputMaybe<Scalars['String']>>;
};


export type QuerySocialStoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<SocialStoryOrderBy>>>;
  providers?: InputMaybe<Array<SocialStoryProvider>>;
  theme?: InputMaybe<SocialStoryTheme>;
  width?: InputMaybe<Scalars['Int']>;
};


export type QuerySocialStoryArgs = {
  id: Scalars['ID'];
};


export type QuerySteam2FaCodeArgs = {
  sharedSecret: Scalars['String'];
};


export type QuerySteamAssetArgs = {
  id: Scalars['ID'];
};


export type QuerySteamAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  incomingSteamOfferId?: InputMaybe<Scalars['ID']>;
  itemVariantId?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  maxLockExpiresAt?: InputMaybe<Scalars['SequelizeDate']>;
  minLockExpiresAt?: InputMaybe<Scalars['SequelizeDate']>;
  orderBy?: InputMaybe<Array<InputMaybe<SteamAssetOrderBy>>>;
  outgoingSteamOfferId?: InputMaybe<Scalars['ID']>;
  steamBotId?: InputMaybe<Scalars['ID']>;
};


export type QuerySteamBotArgs = {
  id: Scalars['ID'];
};


export type QuerySteamBotsArgs = {
  after?: InputMaybe<Scalars['String']>;
  banned?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<SteamBotOrderBy>>>;
  steamBotId?: InputMaybe<Scalars['ID']>;
  steamGame?: InputMaybe<Scalars['Int']>;
  steamId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<SteamBotType>;
  username?: InputMaybe<Scalars['String']>;
};


export type QuerySteamInventoryArgs = {
  allowCached: Scalars['Boolean'];
  onlyResponse: Scalars['Boolean'];
  steamAppName: SteamAppName;
  userId: Scalars['ID'];
};


export type QuerySteamOfferArgs = {
  id: Scalars['ID'];
};


export type QuerySteamOfferItemVariantArgs = {
  id: Scalars['ID'];
};


export type QuerySteamOfferItemVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<SteamOfferItemVariantOrderBy>>>;
  steamOfferId?: InputMaybe<Scalars['ID']>;
};


export type QuerySteamOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<SteamOfferOrderBy>>>;
  state?: InputMaybe<SteamOfferState>;
  steamBotId?: InputMaybe<Scalars['ID']>;
  steamOfferId?: InputMaybe<Scalars['ID']>;
  tradeId?: InputMaybe<Scalars['ID']>;
  tradeOfferId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QuerySteamUserTradeHistoryArgs = {
  onlyCompleted?: InputMaybe<Scalars['Boolean']>;
  since?: InputMaybe<Scalars['Int']>;
  userId: Scalars['ID'];
  withSteamId?: InputMaybe<Scalars['String']>;
};


export type QueryTagArgs = {
  id: Scalars['ID'];
};


export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<TagOrderBy>>>;
  visible?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTeamArgs = {
  id: Scalars['ID'];
};


export type QueryTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<TeamOrderBy>>>;
};


export type QueryTicketArgs = {
  id: Scalars['ID'];
};


export type QueryTicketsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  jackpotId?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<TicketOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryTileOpeningArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTileOpeningsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<TileOpeningOrderBy>>>;
  tileSettingId?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryTileSettingArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTileSettingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  marketIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TileSettingOrderBy>>>;
};


export type QueryTradeArgs = {
  id: Scalars['ID'];
};


export type QueryTradeItemArgs = {
  id: Scalars['ID'];
};


export type QueryTradeItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<TradeItemOrderBy>>>;
  tradeId?: InputMaybe<Scalars['ID']>;
};


export type QueryTradesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  bySupplier?: InputMaybe<Scalars['Boolean']>;
  depositorSteamId?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  marketName?: InputMaybe<Scalars['String']>;
  maxMarkupPercent?: InputMaybe<Scalars['Float']>;
  maxTotalValue?: InputMaybe<Scalars['Float']>;
  minTotalValue?: InputMaybe<Scalars['Float']>;
  orderBy?: InputMaybe<Array<InputMaybe<TradeOrderBy>>>;
  status?: InputMaybe<TradeStatus>;
  statuses?: InputMaybe<Array<TradeStatus>>;
  steamAppName?: InputMaybe<SteamAppName>;
  tradeId?: InputMaybe<Scalars['ID']>;
  updatedAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  updatedAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  userId?: InputMaybe<Scalars['ID']>;
  withdrawerSteamId?: InputMaybe<Scalars['String']>;
};


export type QueryTransactionArgs = {
  externalId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['String']>;
  createdBefore?: InputMaybe<Scalars['String']>;
  externalIds?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  maxDate?: InputMaybe<Scalars['String']>;
  minDate?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<TransactionOrderBy>>>;
  promoCodeId?: InputMaybe<Scalars['ID']>;
  provider?: InputMaybe<PaymentProvider>;
  providers?: InputMaybe<Array<PaymentProvider>>;
  status?: InputMaybe<Scalars['String']>;
  statuses?: InputMaybe<Array<TransactionStatus>>;
  transactionId?: InputMaybe<Scalars['ID']>;
  types?: InputMaybe<Array<TransactionType>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryTriggerArgs = {
  id: Scalars['ID'];
};


export type QueryTriggersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  hasGiveaway?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<TriggerOrderBy>>>;
  status?: InputMaybe<TriggerStatus>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserAchievementArgs = {
  id: Scalars['ID'];
};


export type QueryUserAchievementsArgs = {
  achievementIds?: InputMaybe<Array<Scalars['ID']>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserAchievementOrderBy>>>;
  types?: InputMaybe<Array<AchievementType>>;
  userAchievementIds?: InputMaybe<Array<Scalars['ID']>>;
  userId?: InputMaybe<Scalars['ID']>;
  userIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryUserAddressArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUserAddressesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserAddressOrderBy>>>;
  userIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryUserAssetArgs = {
  id: Scalars['ID'];
};


export type QueryUserAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserAssetOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryUserBoxArgs = {
  id: Scalars['ID'];
};


export type QueryUserBoxesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserBoxOrderBy>>>;
  status?: InputMaybe<Array<InputMaybe<UserBoxStatus>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryUserCommunicationArgs = {
  id: Scalars['ID'];
};


export type QueryUserCommunicationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  mutedUserIds?: InputMaybe<Array<Scalars['ID']>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserCommunicationOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryUserGiveawayArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUserGiveawaysArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  giveawayId?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserGiveawayOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryUserItemArgs = {
  id: Scalars['ID'];
};


export type QueryUserItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['ID']>;
  exchangedForBalance?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  itemType?: InputMaybe<Array<ItemType>>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserItemOrderBy>>>;
  retailer?: InputMaybe<Array<Retailer>>;
  retailerIds?: InputMaybe<Array<Scalars['ID']>>;
  status?: InputMaybe<Array<InputMaybe<UserItemStatus>>>;
  updatedAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  updatedAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryUserPollOptionArgs = {
  id: Scalars['ID'];
};


export type QueryUserPollOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserPollOptionOrderBy>>>;
  pollId?: InputMaybe<Scalars['ID']>;
  pollOptionId?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryUserProgressChangeArgs = {
  id: Scalars['ID'];
};


export type QueryUserProgressChangesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserProgressChangeOrderBy>>>;
  sources?: InputMaybe<Array<UserProgressSource>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryUserProgressChangesSummaryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserProgressChangeSummaryOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryUserPromoCodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserPromoCodeOrderBy>>>;
  promoCodeId?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryUserRewardsArgs = {
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  userId: Scalars['ID'];
};


export type QueryUserStatArgs = {
  id: Scalars['ID'];
};


export type QueryUserStatisticsArgs = {
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  userId: Scalars['ID'];
};


export type QueryUserStatsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  dateFrom?: InputMaybe<Scalars['SequelizeDate']>;
  dateTo?: InputMaybe<Scalars['SequelizeDate']>;
  excludeBannedUsers?: InputMaybe<Scalars['Boolean']>;
  excluded?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  includeOwnersAndBots?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  marketId?: InputMaybe<Scalars['ID']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserStatOrderBy>>>;
  stat?: InputMaybe<Array<UserStatStat>>;
  type?: InputMaybe<Array<UserStatType>>;
  userId?: InputMaybe<Scalars['ID']>;
  userStatId?: InputMaybe<Scalars['ID']>;
};


export type QueryUserTierArgs = {
  id: Scalars['ID'];
};


export type QueryUserTierAssetArgs = {
  id: Scalars['ID'];
};


export type QueryUserTierAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserTierAssetOrderBy>>>;
  rank?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryUserTiersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserTierOrderBy>>>;
};


export type QueryUsersArgs = {
  affiliateTierId?: InputMaybe<Scalars['ID']>;
  affiliateUserId?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  maxTotalCommissionEarnt?: InputMaybe<Scalars['Float']>;
  minTotalCommissionEarnt?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  permissions?: InputMaybe<Scalars['Int']>;
  roles?: InputMaybe<Array<InputMaybe<UserRole>>>;
  steamId?: InputMaybe<Scalars['String']>;
  supplier?: InputMaybe<Scalars['Boolean']>;
  trader?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryWaitingListEmailArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryWaitingListEmailsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<EmailWaitingListOrderBy>>>;
  statuses?: InputMaybe<Array<EmailWaitingListStatus>>;
};


export type QueryWalletArgs = {
  id: Scalars['ID'];
};


export type QueryWalletChangeArgs = {
  id: Scalars['ID'];
};


export type QueryWalletChangesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  createdAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<WalletChangeOrderBy>>>;
  type?: InputMaybe<Array<WalletChangeType>>;
  userId?: InputMaybe<Scalars['ID']>;
  walletIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryWalletChangesSummaryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  maxDate?: InputMaybe<Scalars['SequelizeDate']>;
  minDate?: InputMaybe<Scalars['SequelizeDate']>;
  orderBy?: InputMaybe<Array<InputMaybe<WalletChangesSummaryOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryWalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  claimable?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  minAmount?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Array<WalletType>>;
  orderBy?: InputMaybe<Array<InputMaybe<WalletOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryWaxPeerItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  from?: InputMaybe<Scalars['Float']>;
  marketHashName?: InputMaybe<Scalars['String']>;
  markup?: InputMaybe<Scalars['Int']>;
  maxValue?: InputMaybe<Scalars['Float']>;
  minValue?: InputMaybe<Scalars['Float']>;
  orderBy?: InputMaybe<WaxPeerItemOrderBy>;
};


export type QueryWaxPeerTradeArgs = {
  id: Scalars['ID'];
};


export type QueryWaxPeerTradesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['String']>;
  externalStatus?: InputMaybe<WaxPeerTradeExternalStatus>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  itemVariantId?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<WaxPeerTradeOrderBy>>>;
  status?: InputMaybe<WaxPeerTradeStatus>;
  userId?: InputMaybe<Scalars['ID']>;
  waxPeerTradeId?: InputMaybe<Scalars['ID']>;
};


export type QueryWishlistArgs = {
  id: Scalars['ID'];
};


export type QueryWishlistsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<WishlistOrderBy>>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryWithdrawalRequestArgs = {
  id: Scalars['ID'];
};


export type QueryWithdrawalRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdFrom?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<WithdrawalRequestOrderBy>>>;
  status?: InputMaybe<WithdrawalRequestStatus>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryZbtMarketplaceItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  marketHashName?: InputMaybe<Scalars['String']>;
  maxValue?: InputMaybe<Scalars['Float']>;
  minValue?: InputMaybe<Scalars['Float']>;
  orderBy?: InputMaybe<ZbtMarketplaceItemOrderBy>;
  steamAppName: SteamAppName;
};


export type QueryZbtTradeArgs = {
  id: Scalars['ID'];
};


export type QueryZbtTradesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['String']>;
  externalStatus?: InputMaybe<ZbtTradeExternalStatus>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  itemVariantId?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<ZbtTradeOrderBy>>>;
  status?: InputMaybe<ZbtTradeStatus>;
  userId?: InputMaybe<Scalars['ID']>;
  zbtTradeId?: InputMaybe<Scalars['ID']>;
};


export type QueryZincOrderArgs = {
  id: Scalars['ID'];
};


export type QueryZincOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAtMaxDate?: InputMaybe<Scalars['SequelizeDate']>;
  createdAtMinDate?: InputMaybe<Scalars['SequelizeDate']>;
  creatorId?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<ZincOrderOrderBy>>>;
  orderId?: InputMaybe<Scalars['ID']>;
  zincOrderId?: InputMaybe<Scalars['ID']>;
};


export type QueryZincProductSearchArgs = {
  input: ZincProductSearchInput;
};

export type RakebackClaimInput = {
  amount: Scalars['Float'];
};

export type RakebackClaimPayload = {
  __typename?: 'RakebackClaimPayload';
  rakebackSpent: Scalars['Float'];
  rakebackValueGenerated: Scalars['Float'];
};

export type RankUpGame = Node & {
  __typename?: 'RankUpGame';
  chance: Scalars['Float'];
  createdAt: Scalars['SequelizeDate'];
  destinationTierRank: Scalars['Int'];
  destinationUserTier: UserTier;
  id: Scalars['ID'];
  rakebackBet: Scalars['Float'];
  rakebackValue: Scalars['Float'];
  rakebackValueCurrency?: Maybe<Scalars['String']>;
  roll: Roll;
  rollId: Scalars['ID'];
  startTierRank: Scalars['Int'];
  startUserTier: UserTier;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  win: Scalars['Boolean'];
};

export type RankUpGameConnection = {
  __typename?: 'RankUpGameConnection';
  edges?: Maybe<Array<Maybe<RankUpGameEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type RankUpGameEdge = {
  __typename?: 'RankUpGameEdge';
  cursor: Scalars['String'];
  node?: Maybe<RankUpGame>;
};

export enum RankUpGameOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type ReadySteamOfferInput = {
  steamOfferId?: InputMaybe<Scalars['ID']>;
  tradeId?: InputMaybe<Scalars['ID']>;
};

export type ReadySteamOfferPayload = {
  __typename?: 'ReadySteamOfferPayload';
  steamOffer?: Maybe<SteamOffer>;
};

export type RecalculateBoxStatisticsInput = {
  secret?: InputMaybe<Scalars['String']>;
};

export type RecalculateBoxStatisticsPayload = {
  __typename?: 'RecalculateBoxStatisticsPayload';
  success: Scalars['Boolean'];
};

export type RecalculateJackpotInput = {
  secret?: InputMaybe<Scalars['String']>;
};

export type RecalculateJackpotPayload = {
  __typename?: 'RecalculateJackpotPayload';
  jackpot: Jackpot;
};

export type RecalculateJackpotTicketsInput = {
  jackpotId: Scalars['ID'];
  secret?: InputMaybe<Scalars['String']>;
};

export type RecalculateJackpotTicketsPayload = {
  __typename?: 'RecalculateJackpotTicketsPayload';
  ticketsInfo: JackpotTicketsInfo;
  total: Scalars['Int'];
};

export type RefereeActivityInput = {
  affiliateUserId: Scalars['ID'];
  dateRange?: InputMaybe<AffiliateReportType>;
  endDate?: InputMaybe<Scalars['SequelizeDate']>;
  startDate?: InputMaybe<Scalars['SequelizeDate']>;
};

export type RefereeActivityResult = {
  __typename?: 'RefereeActivityResult';
  active: TrackerTimeSeries;
  retargetable: TrackerTimeSeries;
  stealable: TrackerTimeSeries;
  unconverted: TrackerTimeSeries;
};

export type RefereeDailyActivityInput = {
  affiliateUserId: Scalars['ID'];
  dateRange?: InputMaybe<AffiliateReportType>;
  endDate?: InputMaybe<Scalars['SequelizeDate']>;
  startDate?: InputMaybe<Scalars['SequelizeDate']>;
};

export type RefereeDailyActivityResult = {
  __typename?: 'RefereeDailyActivityResult';
  timeSeries: Array<Tracker>;
};

export type RefereeStatusInput = {
  id: Scalars['ID'];
};

export type RefereeStatusResult = {
  __typename?: 'RefereeStatusResult';
  secondsLeft?: Maybe<Scalars['Int']>;
  status?: Maybe<UserAffiliateStatus>;
};

export type RefreshBoxOpeningStream = {
  __typename?: 'RefreshBoxOpeningStream';
  boxOpeningsByTime: Array<BoxOpening>;
  boxOpeningsByValue: Array<BoxOpening>;
};

export type RefreshBoxOpeningStreamInput = {
  ancestorBoxId?: InputMaybe<Scalars['ID']>;
  boxSlug?: InputMaybe<Scalars['String']>;
  secret?: InputMaybe<Scalars['String']>;
};

export type RefreshBoxesInput = {
  boxIds?: InputMaybe<Array<Scalars['ID']>>;
  forceClone?: InputMaybe<Scalars['Boolean']>;
  marketId?: InputMaybe<Scalars['ID']>;
};

export type RefreshBoxesPayload = {
  __typename?: 'RefreshBoxesPayload';
  success: Scalars['Boolean'];
};

export type RefreshCachedGameBetsInput = {
  gameId: Scalars['ID'];
  secret?: InputMaybe<Scalars['String']>;
};

export type RefreshCachedGameBetsPayload = {
  __typename?: 'RefreshCachedGameBetsPayload';
  success: Scalars['Boolean'];
};

export type RefreshCachedGameBetsSubscriptionPayload = {
  __typename?: 'RefreshCachedGameBetsSubscriptionPayload';
  gameId: Scalars['ID'];
  success?: Maybe<Scalars['Boolean']>;
};

export type RefreshCachedLatestGamesInput = {
  secret?: InputMaybe<Scalars['String']>;
};

export type RefreshCachedLatestGamesPayload = {
  __typename?: 'RefreshCachedLatestGamesPayload';
  success: Scalars['Boolean'];
};

export type RefreshCachedLatestGamesSubscriptionPayload = {
  __typename?: 'RefreshCachedLatestGamesSubscriptionPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type RefreshMatchBettingMatchesStatsInput = {
  matchBettingMatchId: Scalars['ID'];
  secret?: InputMaybe<Scalars['String']>;
};

export type RefreshMatchBettingMatchesStatsPayload = {
  __typename?: 'RefreshMatchBettingMatchesStatsPayload';
  success: Scalars['Boolean'];
};

export type RefundStuckPvpGameBetsInput = {
  pvpGameId: Scalars['ID'];
};

export type RefundStuckPvpGameBetsPayload = {
  __typename?: 'RefundStuckPvpGameBetsPayload';
  alreadyRefundedPvpBets: Array<PvpBet>;
  refundedPvpBets: Array<PvpBet>;
};

export type RefundUserBoxInput = {
  id: Scalars['ID'];
};

export type RefundUserBoxPayload = {
  __typename?: 'RefundUserBoxPayload';
  userBox?: Maybe<UserBox>;
};

export type RemoveFromListedTradeSubscriptionPayload = {
  __typename?: 'RemoveFromListedTradeSubscriptionPayload';
  tradeId: Scalars['ID'];
};

export type ResendVerificationEmailInput = {
  recaptcha: Scalars['String'];
  userId: Scalars['String'];
  visualRecaptcha?: InputMaybe<Scalars['String']>;
};

export type ResetPasswordInput = {
  confirmPassword: Scalars['String'];
  hash: Scalars['String'];
  password: Scalars['String'];
  recaptcha: Scalars['String'];
  twoFactorToken?: InputMaybe<Scalars['String']>;
  visualRecaptcha?: InputMaybe<Scalars['String']>;
};

export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type ResolveCasinoGameImagesPayload = {
  __typename?: 'ResolveCasinoGameImagesPayload';
  success: Scalars['Boolean'];
};

export type ResubscribeUserToAllMarketingEmailsInput = {
  email: Scalars['String'];
  secret: Scalars['String'];
};

export type ResubscribeUserToAllMarketingEmailsPayload = {
  __typename?: 'ResubscribeUserToAllMarketingEmailsPayload';
  email: Scalars['String'];
};

export type ResumeCronJobInput = {
  name: Scalars['String'];
};

export type ResumeCronJobPayload = {
  __typename?: 'ResumeCronJobPayload';
  cronJob?: Maybe<CronJob>;
};

export enum Retailer {
  Aliexpress = 'ALIEXPRESS',
  AmazonCa = 'AMAZON_CA',
  AmazonDe = 'AMAZON_DE',
  AmazonMx = 'AMAZON_MX',
  AmazonUk = 'AMAZON_UK',
  AmazonUs = 'AMAZON_US',
  CloutjuiceMerch = 'CLOUTJUICE_MERCH',
  Costco = 'COSTCO',
  Farfetch = 'FARFETCH',
  Homedepot = 'HOMEDEPOT',
  Lowes = 'LOWES',
  Redbubble = 'REDBUBBLE',
  Stockx = 'STOCKX',
  Walmart = 'WALMART'
}

export type RetailerConnection = {
  __typename?: 'RetailerConnection';
  edges?: Maybe<Array<Maybe<RetailerEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type RetailerDeliveryStats = {
  __typename?: 'RetailerDeliveryStats';
  estimatedDeliveryInHours?: Maybe<Scalars['Int']>;
  fromRequestedToDeliveredInHours?: Maybe<Scalars['Int']>;
  ordersCreatedInSecondsAvg?: Maybe<Scalars['Int']>;
  retailer?: Maybe<Scalars['String']>;
  retailerId?: Maybe<Scalars['ID']>;
};

export type RetailerDeliveryStatsResponse = {
  __typename?: 'RetailerDeliveryStatsResponse';
  stats?: Maybe<Array<RetailerDeliveryStats>>;
};

export type RetailerEdge = {
  __typename?: 'RetailerEdge';
  cursor: Scalars['String'];
  node?: Maybe<RetailerType>;
};

export enum RetailerOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type RetailerPayload = {
  __typename?: 'RetailerPayload';
  retailer: RetailerType;
};

export type RetailerType = Node & {
  __typename?: 'RetailerType';
  code: Scalars['String'];
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['SequelizeDate'];
};

export type RetrieveTotpTwoFactorBackupCodesInput = {
  token: Scalars['String'];
};

export type RetrieveTotpTwoFactorBackupCodesPayload = {
  __typename?: 'RetrieveTotpTwoFactorBackupCodesPayload';
  backupCodes: Array<UserTwoFactorBackupCode>;
};

export type RetryZincOrderInput = {
  zincOrderId: Scalars['ID'];
};

export type RetryZincOrderPayload = {
  __typename?: 'RetryZincOrderPayload';
  zincOrder?: Maybe<ZincOrder>;
};

export type RevertUserInput = {
  dateTime: Scalars['SequelizeDate'];
  userId: Scalars['ID'];
};

export type RevertUserPayload = {
  __typename?: 'RevertUserPayload';
  user?: Maybe<User>;
};

export type Roll = Node & {
  __typename?: 'Roll';
  clientSeed?: Maybe<Seed>;
  clientSeedId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['SequelizeDate'];
  game?: Maybe<GameType>;
  id: Scalars['ID'];
  nonce?: Maybe<Scalars['Int']>;
  serverSeed?: Maybe<Seed>;
  serverSeedId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['Int']>;
};

export type RollConnection = {
  __typename?: 'RollConnection';
  edges?: Maybe<Array<Maybe<RollEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type RollEdge = {
  __typename?: 'RollEdge';
  cursor: Scalars['String'];
  node?: Maybe<Roll>;
};

export type RollHistory = {
  __typename?: 'RollHistory';
  clientSeed?: Maybe<Seed>;
  clientSeedId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['SequelizeDate']>;
  createdAtDate?: Maybe<Scalars['String']>;
  game?: Maybe<GameType>;
  id: Scalars['ID'];
  maxId: Scalars['ID'];
  maxNonce?: Maybe<Scalars['Int']>;
  minId: Scalars['ID'];
  minNonce?: Maybe<Scalars['Int']>;
  serverSeed?: Maybe<Seed>;
  serverSeedId?: Maybe<Scalars['ID']>;
};

export enum RollOrderBy {
  Desc = 'DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type ScheduleSyncForMatchBettingMatchesInput = {
  matchBettingMatchIds: Array<Scalars['ID']>;
  secret?: InputMaybe<Scalars['String']>;
};

export type ScheduleSyncForMatchBettingMatchesPayload = {
  __typename?: 'ScheduleSyncForMatchBettingMatchesPayload';
  success: Scalars['Boolean'];
};

export type SchedulerAppEngineHttpTargetInput = {
  appEngineRouting?: InputMaybe<SchedulerAppEngineRoutingInput>;
  body?: InputMaybe<Scalars['String']>;
  headers?: InputMaybe<Scalars['JSON']>;
  httpMethod?: InputMaybe<SchedulerHttpMethod>;
  relativeUri?: InputMaybe<Scalars['String']>;
};

export type SchedulerAppEngineRoutingInput = {
  host?: InputMaybe<Scalars['String']>;
  instance?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type SchedulerDurationInput = {
  nanos?: InputMaybe<Scalars['Int']>;
  seconds?: InputMaybe<Scalars['Int']>;
};

export enum SchedulerHttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Head = 'HEAD',
  HttpMethodUnspecified = 'HTTP_METHOD_UNSPECIFIED',
  Options = 'OPTIONS',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type SchedulerHttpTargetInput = {
  body?: InputMaybe<Scalars['String']>;
  headers?: InputMaybe<Scalars['JSON']>;
  httpMethod?: InputMaybe<SchedulerHttpMethod>;
  uri?: InputMaybe<Scalars['String']>;
};

export type SchedulerPubsubTargetInput = {
  attributes?: InputMaybe<Scalars['JSON']>;
  data?: InputMaybe<Scalars['String']>;
  topicName?: InputMaybe<Scalars['String']>;
};

export type SchedulerRetryConfigInput = {
  maxBackoffDuration?: InputMaybe<SchedulerDurationInput>;
  maxDoublings?: InputMaybe<Scalars['Int']>;
  maxRetryDuration?: InputMaybe<SchedulerDurationInput>;
  minBackoffDuration?: InputMaybe<SchedulerDurationInput>;
  retryCount?: InputMaybe<Scalars['Int']>;
};

export enum SchedulerState {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED',
  Paused = 'PAUSED',
  StateUnspecified = 'STATE_UNSPECIFIED',
  UpdateFailed = 'UPDATE_FAILED'
}

export type Seed = Node & {
  __typename?: 'Seed';
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  future?: Maybe<Scalars['Boolean']>;
  hash?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  type?: Maybe<SeedType>;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId: Scalars['ID'];
  value?: Maybe<Scalars['String']>;
};

export type SeedConnection = {
  __typename?: 'SeedConnection';
  edges?: Maybe<Array<Maybe<SeedEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type SeedEdge = {
  __typename?: 'SeedEdge';
  cursor: Scalars['String'];
  node?: Maybe<Seed>;
};

export enum SeedOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum SeedType {
  Client = 'CLIENT',
  Server = 'SERVER'
}

export type SelectPollOptionsInput = {
  pollId: Scalars['ID'];
  pollOptionIds: Array<Scalars['ID']>;
};

export type SelectPollOptionsPayload = {
  __typename?: 'SelectPollOptionsPayload';
  poll?: Maybe<Poll>;
  pollOptions?: Maybe<Array<PollOption>>;
  userPollOptions?: Maybe<Array<UserPollOption>>;
};

export type SendOrderDeliveredEmailInput = {
  orderId: Scalars['ID'];
  secret: Scalars['String'];
};

export type SendOrderDeliveredEmailPayload = {
  __typename?: 'SendOrderDeliveredEmailPayload';
  order?: Maybe<Order>;
};

export type SendSelfExclusionExpiredEmailInput = {
  secret: Scalars['String'];
  selfExcludeForHours: Scalars['Int'];
  selfExcludeUntil: Scalars['SequelizeDate'];
  userId: Scalars['ID'];
};

export type SendSelfExclusionExpiredEmailPayload = {
  __typename?: 'SendSelfExclusionExpiredEmailPayload';
  email: Scalars['String'];
};

export type SendValidationEmailInput = {
  redirectUri: Scalars['String'];
  userId: Scalars['ID'];
};

export type SendValidationEmailPayload = {
  __typename?: 'SendValidationEmailPayload';
  success: Scalars['Boolean'];
};

export type SetUserAvatarInput = {
  userAssetId: Scalars['ID'];
};

export type Setting = Node & {
  __typename?: 'Setting';
  description?: Maybe<Scalars['String']>;
  editableByRoles?: Maybe<Array<UserRole>>;
  id: Scalars['ID'];
  key: Scalars['String'];
  type: SettingType;
  value?: Maybe<Scalars['String']>;
  visibleByRoles?: Maybe<Array<UserRole>>;
};

export enum SettingType {
  Boolean = 'BOOLEAN',
  Float = 'FLOAT',
  Integer = 'INTEGER',
  Json = 'JSON',
  String = 'STRING',
  Text = 'TEXT'
}

export type ShipTo = {
  __typename?: 'ShipTo';
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
  region?: Maybe<Scalars['String']>;
};

export type ShipToInput = {
  address1: Scalars['String'];
  address2?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
  region?: InputMaybe<Scalars['String']>;
};

export enum ShippingPriority {
  Cheapest = 'CHEAPEST',
  Fastest = 'FASTEST'
}

export type ShortTermCash = {
  __typename?: 'ShortTermCash';
  claimed?: Maybe<Scalars['Float']>;
  totalAwarded?: Maybe<Scalars['Float']>;
  unclaimed?: Maybe<Scalars['Float']>;
};

export type SleepSteamBotPayload = {
  __typename?: 'SleepSteamBotPayload';
  steamBot?: Maybe<SteamBot>;
};

export type SocialStory = Node & {
  __typename?: 'SocialStory';
  createdAt: Scalars['SequelizeDate'];
  /** The ID of an object */
  id: Scalars['ID'];
  oEmbedData: SocialStoryOEmbedData;
  position: Scalars['Int'];
  provider: SocialStoryProvider;
  updatedAt: Scalars['SequelizeDate'];
  url: Scalars['String'];
};

export type SocialStoryConnection = {
  __typename?: 'SocialStoryConnection';
  edges: Array<SocialStoryEdge>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type SocialStoryEdge = {
  __typename?: 'SocialStoryEdge';
  cursor: Scalars['String'];
  node: SocialStory;
};

export type SocialStoryOEmbedData = {
  __typename?: 'SocialStoryOEmbedData';
  html: Scalars['String'];
};

export enum SocialStoryOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Position = 'POSITION',
  PositionDesc = 'POSITION_DESC'
}

export enum SocialStoryProvider {
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
  Twitter = 'TWITTER'
}

/** Will provide oEmbed data with selected theme if url provider supports it */
export enum SocialStoryTheme {
  Dark = 'DARK',
  Light = 'LIGHT'
}

export type SourceModels = {
  __typename?: 'SourceModels';
  bet?: Maybe<Bet>;
  box?: Maybe<Box>;
  boxOpening?: Maybe<BoxOpening>;
  crashBet?: Maybe<CrashBet>;
  diceBet?: Maybe<DiceBet>;
  exchange?: Maybe<Exchange>;
  gemstoneGame?: Maybe<GemstoneGame>;
  matchBettingSlip?: Maybe<MatchBettingSlip>;
  plinkoBet?: Maybe<PlinkoBet>;
  promoCode?: Maybe<PromoCode>;
  pvpBet?: Maybe<PvpBet>;
  pvpGame?: Maybe<PvpGame>;
  rankUpGame?: Maybe<RankUpGame>;
  trade?: Maybe<Trade>;
  transaction?: Maybe<Transaction>;
  user?: Maybe<User>;
  userItem?: Maybe<UserItem>;
  userTierAsset?: Maybe<UserTierAsset>;
  walletChange?: Maybe<WalletChange>;
};

export type StartCasinoGameSessionInput = {
  currency?: InputMaybe<Scalars['String']>;
  depositUrl: Scalars['String'];
  deviceType: Device;
  gameId?: InputMaybe<Scalars['ID']>;
  isDemo: Scalars['Boolean'];
  locale?: InputMaybe<Scalars['String']>;
  returnUrl: Scalars['String'];
  slug?: InputMaybe<Scalars['String']>;
};

export enum SteamAppName {
  Csgo = 'CSGO',
  Dota2 = 'DOTA2',
  H1Z1 = 'H1Z1',
  Pubg = 'PUBG',
  Rust = 'RUST',
  Steam = 'STEAM'
}

export type SteamAsset = Node & {
  __typename?: 'SteamAsset';
  appId?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  classId?: Maybe<Scalars['String']>;
  contextId?: Maybe<Scalars['String']>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  depositValue?: Maybe<Scalars['Float']>;
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  incomingSteamOffer?: Maybe<SteamOffer>;
  incomingSteamOfferId?: Maybe<Scalars['ID']>;
  inspectLink?: Maybe<Scalars['String']>;
  instanceId?: Maybe<Scalars['String']>;
  itemVariant?: Maybe<ItemVariant>;
  itemVariantId?: Maybe<Scalars['ID']>;
  lockExpiresAt?: Maybe<Scalars['SequelizeDate']>;
  marketHashName?: Maybe<Scalars['String']>;
  outgoingSteamOffer?: Maybe<SteamOffer>;
  outgoingSteamOfferId?: Maybe<Scalars['ID']>;
  steamBot?: Maybe<SteamBot>;
  steamBotId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['SequelizeDate'];
  withdrawValue?: Maybe<Scalars['Float']>;
};

export type SteamAssetConnection = {
  __typename?: 'SteamAssetConnection';
  edges?: Maybe<Array<Maybe<SteamAssetEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type SteamAssetEdge = {
  __typename?: 'SteamAssetEdge';
  cursor: Scalars['String'];
  node?: Maybe<SteamAsset>;
};

export enum SteamAssetOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DepositValue = 'DEPOSIT_VALUE',
  DepositValueDesc = 'DEPOSIT_VALUE_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  LockExpiresAt = 'LOCK_EXPIRES_AT',
  LockExpiresAtDesc = 'LOCK_EXPIRES_AT_DESC'
}

export type SteamBot = Node & {
  __typename?: 'SteamBot';
  activeAt?: Maybe<Scalars['SequelizeDate']>;
  activeUntil?: Maybe<Scalars['SequelizeDate']>;
  banned?: Maybe<Scalars['Boolean']>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['SequelizeDate'];
  deposit?: Maybe<Scalars['Boolean']>;
  displayName: Scalars['String'];
  enabled?: Maybe<Scalars['Boolean']>;
  httpProxy?: Maybe<Scalars['String']>;
  httpsProxy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  inventorySeenAt?: Maybe<Scalars['SequelizeDate']>;
  lastKnownHost?: Maybe<Scalars['String']>;
  maxAcceptableTradeValue?: Maybe<Scalars['Float']>;
  maxStockCount?: Maybe<Scalars['Int']>;
  maxStockValue?: Maybe<Scalars['Float']>;
  minAcceptableTradeValue?: Maybe<Scalars['Float']>;
  steamAccountIdentitySecret?: Maybe<Scalars['String']>;
  steamAccountLoginKey?: Maybe<Scalars['String']>;
  steamAccountPassword?: Maybe<Scalars['String']>;
  steamAccountSharedSecret?: Maybe<Scalars['String']>;
  steamAssetValue?: Maybe<Scalars['Float']>;
  steamAssets?: Maybe<SteamAssetConnection>;
  steamGame?: Maybe<Scalars['Int']>;
  steamId?: Maybe<Scalars['String']>;
  steamTradeUrl?: Maybe<Scalars['String']>;
  type: SteamBotType;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
  withdraw?: Maybe<Scalars['Boolean']>;
};


export type SteamBotSteamAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};

export type SteamBotConnection = {
  __typename?: 'SteamBotConnection';
  edges?: Maybe<Array<Maybe<SteamBotEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type SteamBotEdge = {
  __typename?: 'SteamBotEdge';
  cursor: Scalars['String'];
  node?: Maybe<SteamBot>;
};

export enum SteamBotOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum SteamBotType {
  Info = 'INFO',
  Trade = 'TRADE'
}

export type SteamOffer = Node & {
  __typename?: 'SteamOffer';
  availableAt: Scalars['SequelizeDate'];
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  expiresAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  outgoingSteamAssets?: Maybe<SteamAssetConnection>;
  state?: Maybe<SteamOfferState>;
  steamBot?: Maybe<SteamBot>;
  steamBotId?: Maybe<Scalars['ID']>;
  steamOfferItemVariants?: Maybe<SteamOfferItemVariantConnection>;
  steamTradeUrl?: Maybe<Scalars['String']>;
  trade?: Maybe<Trade>;
  tradeOfferId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
  userItem?: Maybe<UserItem>;
};

export type SteamOfferConnection = {
  __typename?: 'SteamOfferConnection';
  edges?: Maybe<Array<Maybe<SteamOfferEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type SteamOfferEdge = {
  __typename?: 'SteamOfferEdge';
  cursor: Scalars['String'];
  node?: Maybe<SteamOffer>;
};

export type SteamOfferItemVariant = Node & {
  __typename?: 'SteamOfferItemVariant';
  createdAt?: Maybe<Scalars['SequelizeDate']>;
  direction?: Maybe<OfferDirection>;
  id: Scalars['ID'];
  itemVariant?: Maybe<ItemVariant>;
  itemVariantId?: Maybe<Scalars['ID']>;
  steamOffer?: Maybe<SteamOffer>;
  steamOfferId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['SequelizeDate']>;
};

export type SteamOfferItemVariantConnection = {
  __typename?: 'SteamOfferItemVariantConnection';
  edges?: Maybe<Array<Maybe<SteamOfferItemVariantEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type SteamOfferItemVariantEdge = {
  __typename?: 'SteamOfferItemVariantEdge';
  cursor: Scalars['String'];
  node?: Maybe<SteamOfferItemVariant>;
};

export enum SteamOfferItemVariantOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum SteamOfferOrderBy {
  AvailableAt = 'AVAILABLE_AT',
  AvailableAtDesc = 'AVAILABLE_AT_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  ExpiresAt = 'EXPIRES_AT',
  ExpiresAtDesc = 'EXPIRES_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum SteamOfferState {
  Accepted = 'ACCEPTED',
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  CanceledBySecondFactor = 'CANCELED_BY_SECOND_FACTOR',
  Countered = 'COUNTERED',
  CreatedNeedsConfirmation = 'CREATED_NEEDS_CONFIRMATION',
  Declined = 'DECLINED',
  Expired = 'EXPIRED',
  Invalid = 'INVALID',
  InvalidItems = 'INVALID_ITEMS',
  InEscrow = 'IN_ESCROW',
  Processing = 'PROCESSING'
}

export type SteamTradeFromHistory = {
  __typename?: 'SteamTradeFromHistory';
  amountOfAssetsGiven?: Maybe<Scalars['JSON']>;
  amountOfAssetsReceived?: Maybe<Scalars['JSON']>;
  status: Scalars['Int'];
  steamid_other: Scalars['String'];
  time_init: Scalars['Int'];
  tradeid: Scalars['String'];
};

export type SteamUserTradeHistory = {
  __typename?: 'SteamUserTradeHistory';
  steamTrades: Array<SteamTradeFromHistory>;
};

export type Subscription = {
  __typename?: 'Subscription';
  authenticatedUser: AuthenticatedUserSubscriptionPayload;
  claimUserTierAsset: ClaimUserTierAssetSubscriptionPayload;
  createAffiliateLoanRequest: CreateLoanRequestPayload;
  createBet: CreateBetSubscriptionPayload;
  createBox?: Maybe<CreateBoxSubscriptionPayload>;
  createBoxOpening: CreateBoxOpeningSubscriptionPayload;
  createCalendar?: Maybe<CreateCalendarSubscriptionPayload>;
  createCalendarEntry?: Maybe<CreateCalendarEntrySubscriptionPayload>;
  createCrashBet: CreateCrashBetSubscriptionPayload;
  createCrashGame?: Maybe<CreateCrashGameSubscriptionPayload>;
  createDiceBets: CreateDiceBetsSubscriptionPayload;
  createDigitalCode: CreateDigitalCodeSubscriptionPayload;
  createDocument?: Maybe<CreateDocumentSubscriptionPayload>;
  createDropCacheItem: DropAddedRequestSubscriptionPayload;
  createGame: CreateGameSubscriptionPayload;
  createGameJackpot: CreateGameJackpotSubscriptionPayload;
  createGameMessage: CreateGameMessageSubscriptionPayload;
  createGemstoneBoostActivation: CreateGemstoneBoostActivationPayload;
  createGiveaway: CreateGiveawayPayload;
  createItem: CreateItemSubscriptionPayload;
  createItemCategory: CreateItemCategorySubscriptionPayload;
  createItemVariant: CreateItemVariantSubscriptionPayload;
  createJackpot: CreateJackpotSubscriptionPayload;
  createJackpotWinningTicket: JackpotWinningTicketSubscriptionPayload;
  createMatchBettingGame: CreateMatchBettingGameSubscriptionPayload;
  createMatchBettingLeague: CreateMatchBettingLeagueSubscriptionPayload;
  createMatchBettingMarket: CreateMatchBettingMarketSubscriptionPayload;
  createMatchBettingMatch: CreateMatchBettingMatchSubscriptionPayload;
  createMatchBettingPlayer: CreateMatchBettingPlayerSubscriptionPayload;
  createMatchBettingSerie: CreateMatchBettingSerieSubscriptionPayload;
  createMatchBettingSlip: CreateMatchBettingSlipSubscriptionPayload;
  createMatchBettingTeam: CreateMatchBettingTeamSubscriptionPayload;
  createMatchBettingTournament: CreateMatchBettingTournamentSubscriptionPayload;
  createMessage: CreateMessageSubscriptionPayload;
  createNotification: CreateNotificationSubscriptionPayload;
  createNotificationMessage: CreateNotificationMessageSubscriptionPayload;
  createOrder: CreateOrderSubscriptionPayload;
  createPlinkoBet: CreatePlinkoBetSubscriptionPayload;
  createPoll: CreatePollPayload;
  createPromoCode: CreatePromoCodeSubscriptionPayload;
  createPvpBet: CreatePvpBetSubscriptionPayload;
  createPvpBot: CreatePvpBotSubscriptionPayload;
  createPvpGame: CreatePvpGameSubscriptionPayload;
  createPvpGameMessage: CreatePvpGameMessageSubscriptionPayload;
  createPvpRound: CreatePvpRoundSubscriptionPayload;
  createRoll: CreateRollSubscriptionPayload;
  createSteamAsset: CreateSteamAssetSubscriptionPayload;
  createSteamBot: CreateSteamBotSubscriptionPayload;
  createSteamOffer?: Maybe<CreateSteamOfferSubscriptionPayload>;
  createTag: CreateTagSubscriptionPayload;
  createTicket: CreateTicketSubscriptionPayload;
  createTrade: CreateTradeSubscriptionPayload;
  createTransaction: CreateTransactionSubscriptionPayload;
  createTrigger: CreateTriggerPayload;
  createUser: CreateUserSubscriptionPayload;
  createUserAchievement: CreateUserAchievementSubscriptionPayload;
  createUserAsset: CreateUserAssetSubscriptionPayload;
  createUserBox: CreateUserBoxSubscriptionPayload;
  createUserCommunication: CreateUserCommunicationSubscriptionPayload;
  createUserGiveaway: CreateUserGiveawayPayload;
  createUserItem: CreateUserItemSubscriptionPayload;
  createUserPollOptions?: Maybe<CreateUserPollOptionsPayload>;
  createUserTierAsset: CreateUserTierAssetSubscriptionPayload;
  createWaxPeerTrade: CreateWaxPeerTradeSubscriptionPayload;
  createWishlist: CreateWishlistPayload;
  createWithdrawalRequest: CreateWithdrawalRequestSubscriptionPayload;
  createZbtTrade: CreateZbtTradeSubscriptionPayload;
  createZincOrder: CreateZincOrderSubscriptionPayload;
  deleteCalendar?: Maybe<DeleteCalendarSubscriptionPayload>;
  deleteDigitalCode: DeleteDigitalCodeSubscriptionPayload;
  deleteDocument?: Maybe<DeleteDocumentSubscriptionPayload>;
  deleteItemCategory: DeleteItemCategorySubscriptionPayload;
  deleteItemVariant: DeleteItemVariantSubscriptionPayload;
  deleteMessage: DeleteMessageSubscriptionPayload;
  deleteOrder: DeleteOrderSubscriptionPayload;
  deletePoll?: Maybe<DeletePollSubscriptionPayload>;
  deletePromoCode: DeletePromoCodeSubscriptionPayload;
  deleteSteamAsset: DeleteSteamAssetSubscriptionPayload;
  deleteSteamBot: DeleteSteamBotSubscriptionPayload;
  deleteSteamOffer?: Maybe<DeleteSteamOfferSubscriptionPayload>;
  deleteTag: DeleteTagSubscriptionPayload;
  deleteUserCommunication: DeleteUserCommunicationSubscriptionPayload;
  deleteUserItem: DeleteUserItemSubscriptionPayload;
  deleteUserTierAsset: DeleteUserTierAssetSubscriptionPayload;
  deleteZincOrder: DeleteZincOrderSubscriptionPayload;
  flushSettingCache?: Maybe<Scalars['String']>;
  matchBettingMarketOddsUpdate: MatchBettingMarketOddsUpdatePayload;
  matchBettingUpdateHeartBeat: MatchBettingUpdateHeartBeatSubscriptionPayload;
  onlineCount?: Maybe<Scalars['Int']>;
  playPvpGame: PlayPvpGameSubscriptionPayload;
  plinkoBetSlotsChanged: PlinkoBetSlotsPayload;
  refreshCachedGameBets: RefreshCachedGameBetsSubscriptionPayload;
  refreshCachedLatestGames: RefreshCachedLatestGamesSubscriptionPayload;
  removeFromListedTrade: RemoveFromListedTradeSubscriptionPayload;
  updateAffiliateLoanRequest: UpdateLoanRequestPayload;
  updateBox?: Maybe<UpdateBoxSubscriptionPayload>;
  updateCalendar?: Maybe<UpdateCalendarSubscriptionPayload>;
  updateCasinoGame: UpdateCasinoGameSubscriptionPayload;
  updateCrashBet: UpdateCrashBetSubscriptionPayload;
  updateCrashGame?: Maybe<UpdateCrashGameSubscriptionPayload>;
  updateDigitalCode: UpdateDigitalCodeSubscriptionPayload;
  updateGame: UpdateGameSubscriptionPayload;
  updateGameJackpot: UpdateGameJackpotSubscriptionPayload;
  updateGemstoneBoostInfo?: Maybe<UpdateGemstoneBoostSubscriptionPayload>;
  updateGiveaway: UpdateGiveawayPayload;
  updateItem: UpdateItemSubscriptionPayload;
  updateItemCategory: UpdateItemCategorySubscriptionPayload;
  updateItemVariant: UpdateItemVariantSubscriptionPayload;
  updateJackpot: UpdateJackpotSubscriptionPayload;
  updateMatchBettingGame: UpdateMatchBettingGameSubscriptionPayload;
  updateMatchBettingLeague: UpdateMatchBettingLeagueSubscriptionPayload;
  updateMatchBettingMarket: UpdateMatchBettingMarketSubscriptionPayload;
  updateMatchBettingMatch: UpdateMatchBettingMatchSubscriptionPayload;
  updateMatchBettingPlayer: UpdateMatchBettingPlayerSubscriptionPayload;
  updateMatchBettingSerie: UpdateMatchBettingSerieSubscriptionPayload;
  updateMatchBettingSlip: UpdateMatchBettingSlipSubscriptionPayload;
  updateMatchBettingTeam: UpdateMatchBettingTeamSubscriptionPayload;
  updateMatchBettingTournament: UpdateMatchBettingTournamentSubscriptionPayload;
  updateNotification: UpdateNotificationSubscriptionPayload;
  updateNotificationMessage: UpdateNotificationMessageSubscriptionPayload;
  updateOrder: UpdateOrderSubscriptionPayload;
  updatePoll: UpdatePollPayload;
  updatePollOption: UpdatePollOptionPayload;
  updatePollStatus: UpdatePollStatusPayload;
  updatePromoCode: UpdatePromoCodeSubscriptionPayload;
  updatePvpBet: UpdatePvpBetSubscriptionPayload;
  updatePvpBot: UpdatePvpBetSubscriptionPayload;
  updatePvpGame: UpdatePvpGameSubscriptionPayload;
  updatePvpRound: UpdatePvpRoundSubscriptionPayload;
  updateSetting: UpdateSettingSubscriptionPayload;
  updateSteamAsset: UpdateSteamAssetSubscriptionPayload;
  updateSteamBot: UpdateSteamBotSubscriptionPayload;
  updateSteamOffer?: Maybe<UpdateSteamOfferSubscriptionPayload>;
  updateTag: UpdateTagSubscriptionPayload;
  updateTrade: UpdateTradeSubscriptionPayload;
  updateTransaction: UpdateTransactionSubscriptionPayload;
  updateTrigger: UpdateTriggerPayload;
  updateTriggerStatus: UpdateTriggerPayload;
  updateUser: UpdateUserSubscriptionPayload;
  updateUserAchievement: UpdateUserAchievementSubscriptionPayload;
  updateUserBox: UpdateUserBoxSubscriptionPayload;
  updateUserGiveaway: UpdateUserGiveawayPayload;
  updateUserItem: UpdateUserItemSubscriptionPayload;
  updateUserProgress?: Maybe<UpdateUserProgressSubscriptionPayload>;
  updateUserTierAsset: UpdateUserTierAssetSubscriptionPayload;
  updateWallet: UpdateWalletSubscriptionPayload;
  updateWaxPeerTrade: UpdateWaxPeerTradeSubscriptionPayload;
  updateWishlist: CreateWishlistPayload;
  updateWithdrawalRequest: UpdateWithdrawalRequestSubscriptionPayload;
  updateZbtTrade: UpdateZbtTradeSubscriptionPayload;
  updateZincOrder: UpdateZincOrderSubscriptionPayload;
  usedPromoCode: UsedPromoCodeSubscriptionPayload;
  winGemstones: WinGemstoneSubscription;
};


export type SubscriptionCreateBetArgs = {
  userId?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionCreateBoxOpeningArgs = {
  ancestorBoxId?: InputMaybe<Scalars['ID']>;
  boxId?: InputMaybe<Scalars['ID']>;
  boxSlug?: InputMaybe<Scalars['String']>;
  minItemValue?: InputMaybe<Scalars['Float']>;
};


export type SubscriptionCreateGameMessageArgs = {
  gameId?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionCreateMatchBettingMarketArgs = {
  matchIds?: InputMaybe<Array<Scalars['ID']>>;
  statuses?: InputMaybe<Array<MatchBettingMarketStatus>>;
  videoGames?: InputMaybe<Array<MatchBettingVideoGame>>;
};


export type SubscriptionCreateMatchBettingMatchArgs = {
  name?: InputMaybe<Scalars['String']>;
  statuses?: InputMaybe<Array<MatchBettingMatchStatus>>;
  videoGame?: InputMaybe<MatchBettingVideoGame>;
};


export type SubscriptionCreateMatchBettingSlipArgs = {
  statuses?: InputMaybe<Array<MatchBettingSlipStatus>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionCreateMessageArgs = {
  channel: Scalars['String'];
};


export type SubscriptionCreatePvpGameMessageArgs = {
  pvpGameId?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionCreatePvpRoundArgs = {
  pvpGameId?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionCreateTicketArgs = {
  userId?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionCreateTradeArgs = {
  userId?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionCreateUserAchievementArgs = {
  userId?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionCreateUserPollOptionsArgs = {
  pollId?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionDeleteMessageArgs = {
  channel: Scalars['String'];
};


export type SubscriptionMatchBettingMarketOddsUpdateArgs = {
  marketIds?: InputMaybe<Array<Scalars['ID']>>;
  matchIds?: InputMaybe<Array<Scalars['ID']>>;
  statuses?: InputMaybe<Array<MatchBettingMarketStatus>>;
  videoGames?: InputMaybe<Array<MatchBettingVideoGame>>;
};


export type SubscriptionUpdateCrashBetArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionUpdateGameJackpotArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionUpdateJackpotArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionUpdateMatchBettingMarketArgs = {
  marketIds?: InputMaybe<Array<Scalars['ID']>>;
  matchIds?: InputMaybe<Array<Scalars['ID']>>;
  statuses?: InputMaybe<Array<MatchBettingMarketStatus>>;
  videoGames?: InputMaybe<Array<MatchBettingVideoGame>>;
};


export type SubscriptionUpdateMatchBettingMatchArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  statuses?: InputMaybe<Array<MatchBettingMatchStatus>>;
  videoGame?: InputMaybe<MatchBettingVideoGame>;
};


export type SubscriptionUpdateMatchBettingSlipArgs = {
  id?: InputMaybe<Scalars['ID']>;
  statuses?: InputMaybe<Array<MatchBettingSlipStatus>>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionUpdatePromoCodeArgs = {
  code: Scalars['String'];
  marketId: Scalars['ID'];
};


export type SubscriptionUpdatePvpGameArgs = {
  id?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionUpdatePvpRoundArgs = {
  id?: InputMaybe<Scalars['ID']>;
  pvpGameId?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionUpdateSteamAssetArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionUpdateSteamOfferArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionUpdateTradeArgs = {
  status?: InputMaybe<TradeStatus>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionUpdateTransactionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionUpdateWalletArgs = {
  walletType?: InputMaybe<Array<WalletType>>;
};

export type SyncItemPricesInput = {
  itemType: ItemType;
  limit?: InputMaybe<Scalars['Int']>;
  maxId?: InputMaybe<Scalars['Int']>;
  minId?: InputMaybe<Scalars['Int']>;
  notify?: InputMaybe<Scalars['Boolean']>;
  secret?: InputMaybe<Scalars['String']>;
};

export type SyncItemPricesPayload = {
  __typename?: 'SyncItemPricesPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type SyncMatchBettingMatchesInput = {
  matchBettingMatchId?: InputMaybe<Scalars['ID']>;
  statuses?: InputMaybe<Array<MatchBettingMatchStatus>>;
};

export type SyncMatchBettingMatchesPayload = {
  __typename?: 'SyncMatchBettingMatchesPayload';
  success: Scalars['Boolean'];
};

export type SyncNewItemsInput = {
  itemCategoryId?: InputMaybe<Scalars['ID']>;
  itemType: ItemType;
  limit?: InputMaybe<Scalars['Int']>;
  marketId: Scalars['ID'];
  notify?: InputMaybe<Scalars['Boolean']>;
  secret?: InputMaybe<Scalars['String']>;
};

export type SyncNewItemsPayload = {
  __typename?: 'SyncNewItemsPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type SyncUserReportsInput = {
  endDate?: InputMaybe<Scalars['SequelizeDate']>;
  secret?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['SequelizeDate']>;
};

export type SyncUserReportsPayload = {
  __typename?: 'SyncUserReportsPayload';
  success: Scalars['Boolean'];
};

export type Tag = Node & {
  __typename?: 'Tag';
  boxes?: Maybe<Array<Maybe<Box>>>;
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  position: Scalars['Int'];
  updatedAt: Scalars['SequelizeDate'];
  visible: Scalars['Boolean'];
};

export type TagConnection = {
  __typename?: 'TagConnection';
  edges?: Maybe<Array<Maybe<TagEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type TagEdge = {
  __typename?: 'TagEdge';
  cursor: Scalars['String'];
  node?: Maybe<Tag>;
};

export enum TagOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Position = 'POSITION',
  PositionDesc = 'POSITION_DESC'
}

export type Team = Node & {
  __typename?: 'Team';
  createdAt: Scalars['SequelizeDate'];
  id: Scalars['ID'];
  name: Scalars['String'];
  totalGemstones: Scalars['Float'];
  updatedAt: Scalars['SequelizeDate'];
};


export type TeamTotalGemstonesArgs = {
  createdAtMaxDate: Scalars['SequelizeDate'];
  createdAtMinDate: Scalars['SequelizeDate'];
};

export type TeamConnection = {
  __typename?: 'TeamConnection';
  edges?: Maybe<Array<Maybe<TeamEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type TeamEdge = {
  __typename?: 'TeamEdge';
  cursor: Scalars['String'];
  node?: Maybe<Team>;
};

export enum TeamOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type Threat = {
  __typename?: 'Threat';
  isAnonymous?: Maybe<Scalars['Boolean']>;
  isBogon?: Maybe<Scalars['Boolean']>;
  isKnownAbuser?: Maybe<Scalars['Boolean']>;
  isKnownAttacker?: Maybe<Scalars['Boolean']>;
  isProxy?: Maybe<Scalars['Boolean']>;
  isThreat?: Maybe<Scalars['Boolean']>;
  isTor?: Maybe<Scalars['Boolean']>;
};

export type Ticket = Node & {
  __typename?: 'Ticket';
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  jackpot?: Maybe<Jackpot>;
  jackpotId?: Maybe<Scalars['ID']>;
  sequentialNumber?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
};

export type TicketConnection = {
  __typename?: 'TicketConnection';
  edges?: Maybe<Array<Maybe<TicketEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type TicketEdge = {
  __typename?: 'TicketEdge';
  cursor: Scalars['String'];
  node?: Maybe<Ticket>;
};

export enum TicketOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type TileOpening = Node & {
  __typename?: 'TileOpening';
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  currencyBase: Scalars['String'];
  id: Scalars['ID'];
  rewardAmount: Scalars['Float'];
  rewardAmountBase: Scalars['Float'];
  tileSetting?: Maybe<TileSetting>;
  tileSettingId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId: Scalars['ID'];
};

export type TileOpeningConnection = {
  __typename?: 'TileOpeningConnection';
  edges?: Maybe<Array<Maybe<TileOpeningEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type TileOpeningEdge = {
  __typename?: 'TileOpeningEdge';
  cursor: Scalars['String'];
  node?: Maybe<TileOpening>;
};

export enum TileOpeningOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type TileSetting = Node & {
  __typename?: 'TileSetting';
  claimableTiles: Scalars['Int'];
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  levelRequired: Scalars['Int'];
  market?: Maybe<Market>;
  marketId?: Maybe<Scalars['ID']>;
  minRewardPerTile: Scalars['Float'];
  minRewardPerTileInUserCurrency: Scalars['Float'];
  updatedAt: Scalars['SequelizeDate'];
};

export type TileSettingConnection = {
  __typename?: 'TileSettingConnection';
  edges?: Maybe<Array<Maybe<TileSettingEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type TileSettingEdge = {
  __typename?: 'TileSettingEdge';
  cursor: Scalars['String'];
  node?: Maybe<TileSetting>;
};

export enum TileSettingOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type TileSettingPayload = {
  __typename?: 'TileSettingPayload';
  tileSetting: TileSetting;
};

export type TimeZone = {
  __typename?: 'TimeZone';
  abbr?: Maybe<Scalars['String']>;
  currentTime?: Maybe<Scalars['String']>;
  isDst?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['String']>;
};

export type ToggleFavoriteBoxInput = {
  boxId: Scalars['ID'];
};

export type ToggleFavoriteBoxPayload = {
  __typename?: 'ToggleFavoriteBoxPayload';
  status: ToggleFavoriteBoxStatus;
};

export enum ToggleFavoriteBoxStatus {
  Added = 'ADDED',
  Error = 'ERROR',
  Removed = 'REMOVED'
}

export type TotalCommisionGivenAwayPayload = {
  __typename?: 'TotalCommisionGivenAwayPayload';
  amount: Scalars['Float'];
};

export type TrackTradeInput = {
  payload: Scalars['JSON'];
  secret: Scalars['String'];
  tradeId: Scalars['ID'];
};

export type TrackTradePayload = {
  __typename?: 'TrackTradePayload';
  success: Scalars['Boolean'];
};

export type TrackWaxPeerTradeInput = {
  secret?: InputMaybe<Scalars['String']>;
  waxPeerTradeId: Scalars['ID'];
};

export type TrackWaxPeerTradePayload = {
  __typename?: 'TrackWaxPeerTradePayload';
  success: Scalars['Boolean'];
};

export type TrackZbtTradeInput = {
  secret?: InputMaybe<Scalars['String']>;
  zbtTradeId: Scalars['ID'];
};

export type TrackZbtTradePayload = {
  __typename?: 'TrackZbtTradePayload';
  success: Scalars['Boolean'];
};

export type Tracker = {
  __typename?: 'Tracker';
  count: Scalars['Int'];
  date?: Maybe<Scalars['SequelizeDate']>;
  index?: Maybe<Scalars['Int']>;
};

export type TrackerTimeSeries = {
  __typename?: 'TrackerTimeSeries';
  status: UserAffiliateStatus;
  timeSeries: Array<Maybe<Tracker>>;
};

export type Trade = Node & {
  __typename?: 'Trade';
  canJoinAfter?: Maybe<Scalars['SequelizeDate']>;
  cancelReason?: Maybe<CancelReason>;
  cooldownAt?: Maybe<Scalars['SequelizeDate']>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  customValue: Scalars['Boolean'];
  depositor?: Maybe<User>;
  depositorSentItemsAt?: Maybe<Scalars['SequelizeDate']>;
  depositorUserId?: Maybe<Scalars['ID']>;
  expiresAt?: Maybe<Scalars['SequelizeDate']>;
  finishedAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  joinedAt?: Maybe<Scalars['SequelizeDate']>;
  markupPercent: Scalars['Float'];
  processingAt?: Maybe<Scalars['SequelizeDate']>;
  promoCode?: Maybe<PromoCode>;
  promoCodeId?: Maybe<Scalars['ID']>;
  status: TradeStatus;
  steamAppId?: Maybe<Scalars['String']>;
  steamAppName?: Maybe<SteamAppName>;
  steamOffer?: Maybe<SteamOffer>;
  steamOfferId?: Maybe<Scalars['ID']>;
  steamTradeOfferId?: Maybe<Scalars['String']>;
  storageUnitLastModificationAt?: Maybe<Scalars['SequelizeDate']>;
  suspectedTraderCanJoinAfter: Scalars['SequelizeDate'];
  totalValue: Scalars['Float'];
  trackingType?: Maybe<TradeTrackingType>;
  tradeItems?: Maybe<Array<Maybe<TradeItem>>>;
  type?: Maybe<TradeType>;
  updatedAt: Scalars['SequelizeDate'];
  withdrawer?: Maybe<User>;
  withdrawerReceivedItemsAt?: Maybe<Scalars['SequelizeDate']>;
  withdrawerSteamTradeUrl?: Maybe<Scalars['String']>;
  withdrawerUserId?: Maybe<Scalars['ID']>;
};

export type TradeConnection = {
  __typename?: 'TradeConnection';
  edges?: Maybe<Array<Maybe<TradeEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type TradeEdge = {
  __typename?: 'TradeEdge';
  cursor: Scalars['String'];
  node?: Maybe<Trade>;
};

export type TradeItem = Node & {
  __typename?: 'TradeItem';
  currency: Scalars['String'];
  customValue: Scalars['Boolean'];
  id: Scalars['ID'];
  itemVariant?: Maybe<ItemVariant>;
  itemVariantId: Scalars['ID'];
  marketName: Scalars['String'];
  markupPercent: Scalars['Float'];
  trade: Trade;
  tradeId: Scalars['ID'];
  value: Scalars['Float'];
};

export type TradeItemConnection = {
  __typename?: 'TradeItemConnection';
  edges?: Maybe<Array<Maybe<TradeItemEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type TradeItemEdge = {
  __typename?: 'TradeItemEdge';
  cursor: Scalars['String'];
  node?: Maybe<TradeItem>;
};

export type TradeItemInput = {
  itemVariantId: Scalars['ID'];
  value?: InputMaybe<Scalars['Float']>;
};

export enum TradeItemOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum TradeOrderBy {
  BestDeals = 'BEST_DEALS',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MarkupPercent = 'MARKUP_PERCENT',
  MarkupPercentDesc = 'MARKUP_PERCENT_DESC',
  TotalValue = 'TOTAL_VALUE',
  TotalValueDesc = 'TOTAL_VALUE_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type TradeStats = {
  __typename?: 'TradeStats';
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  currentValue?: Maybe<Scalars['Float']>;
};

export enum TradeStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  CompletedPrivate = 'COMPLETED_PRIVATE',
  CompletedWithStorageUnit = 'COMPLETED_WITH_STORAGE_UNIT',
  Cooldown = 'COOLDOWN',
  Frozen = 'FROZEN',
  Joined = 'JOINED',
  Listed = 'LISTED',
  Processing = 'PROCESSING'
}

export enum TradeTrackingType {
  ApiKeyDepositor = 'API_KEY_DEPOSITOR',
  ApiKeyWithdrawer = 'API_KEY_WITHDRAWER',
  Inventory = 'INVENTORY',
  SteamOffer = 'STEAM_OFFER'
}

export enum TradeType {
  Trader = 'TRADER',
  WaxPeer = 'WAX_PEER'
}

export type Transaction = Node & {
  __typename?: 'Transaction';
  amount: Scalars['Decimal'];
  amountBase?: Maybe<Scalars['Float']>;
  bonusAmount: Scalars['Float'];
  bonusMaxAmount?: Maybe<Scalars['Float']>;
  bonusPercent: Scalars['Float'];
  createdAt: Scalars['SequelizeDate'];
  cryptoAddress?: Maybe<Scalars['String']>;
  currency: Scalars['String'];
  currencyBase?: Maybe<Scalars['String']>;
  exchangeRate?: Maybe<Scalars['Float']>;
  exchangedAmount?: Maybe<Scalars['Float']>;
  externalId?: Maybe<Scalars['String']>;
  feeAmount: Scalars['Float'];
  id: Scalars['ID'];
  ipAddress?: Maybe<Scalars['String']>;
  meta?: Maybe<TransactionMeta>;
  method?: Maybe<PaymentMethod>;
  paymentOption?: Maybe<PaymentOption>;
  paymentOptionId?: Maybe<Scalars['ID']>;
  promoCode?: Maybe<PromoCode>;
  promoCodeId?: Maybe<Scalars['ID']>;
  provider?: Maybe<PaymentProvider>;
  renderData?: Maybe<Scalars['JSON']>;
  riskScore?: Maybe<Scalars['Float']>;
  status: TransactionStatus;
  type: TransactionType;
  updatedAt: Scalars['SequelizeDate'];
  url?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userBoxes?: Maybe<Array<TransactionUserBox>>;
  userCurrency?: Maybe<Scalars['String']>;
  userCurrencyAmount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['ID']>;
  userItems?: Maybe<Array<Maybe<TransactionUserItem>>>;
};

export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  edges?: Maybe<Array<Maybe<TransactionEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type TransactionEdge = {
  __typename?: 'TransactionEdge';
  cursor: Scalars['String'];
  node?: Maybe<Transaction>;
};

export type TransactionMeta = {
  __typename?: 'TransactionMeta';
  apmExternalEmail?: Maybe<Scalars['String']>;
  apmTransactionId?: Maybe<Scalars['String']>;
  externalTransactionIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  minimumExchangedAmount?: Maybe<Scalars['Float']>;
  originalAmount?: Maybe<Scalars['Float']>;
  originalExchangeRate?: Maybe<Scalars['Float']>;
  originalExchangedAmount?: Maybe<Scalars['Float']>;
  withdrawalApprovedByUser?: Maybe<User>;
  withdrawalApprovedByUserId?: Maybe<Scalars['ID']>;
};

export enum TransactionOrderBy {
  Amount = 'AMOUNT',
  AmountDesc = 'AMOUNT_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type TransactionStatProvider = {
  __typename?: 'TransactionStatProvider';
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  provider?: Maybe<PaymentProvider>;
  totalAmount?: Maybe<Scalars['Float']>;
};

export type TransactionStats = {
  __typename?: 'TransactionStats';
  provider?: Maybe<Array<Maybe<TransactionStatProvider>>>;
};

export enum TransactionStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  PendingApproval = 'PENDING_APPROVAL',
  PreApproval = 'PRE_APPROVAL',
  Started = 'STARTED'
}

export enum TransactionType {
  Deposit = 'DEPOSIT',
  Withdrawal = 'WITHDRAWAL'
}

export type TransactionUserBox = {
  __typename?: 'TransactionUserBox';
  box: Box;
  boxId: Scalars['ID'];
  userBox: UserBox;
  userBoxId: Scalars['ID'];
};

export type TransactionUserItem = {
  __typename?: 'TransactionUserItem';
  itemVariant?: Maybe<ItemVariant>;
  itemVariantId?: Maybe<Scalars['ID']>;
  userItem?: Maybe<UserItem>;
  userItemId?: Maybe<Scalars['ID']>;
};

export type TransactionsExpandedStatProvider = {
  __typename?: 'TransactionsExpandedStatProvider';
  currency: Scalars['String'];
  entries: Array<TransactionsExpandedStatProviderEntry>;
  provider: PaymentProvider;
  totalAmountBase: Scalars['Float'];
  totalAmountBaseConverted: Scalars['Float'];
  totalAmountConverted: Scalars['Float'];
  totalCount: Scalars['Int'];
  totalFeeAmountBase: Scalars['Float'];
  totalFeeAmountBaseConverted: Scalars['Float'];
};

export type TransactionsExpandedStatProviderEntry = {
  __typename?: 'TransactionsExpandedStatProviderEntry';
  count?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  currencyBase?: Maybe<Scalars['String']>;
  paymentOption?: Maybe<PaymentOption>;
  paymentOptionId?: Maybe<Scalars['ID']>;
  totalAmount?: Maybe<Scalars['Float']>;
  totalAmountBase?: Maybe<Scalars['Float']>;
  totalAmountBaseConverted: Scalars['Float'];
  totalAmountConverted: Scalars['Float'];
  totalAmountUserCurrency?: Maybe<Scalars['Float']>;
  totalFeeAmount: Scalars['Float'];
  totalFeeAmountBase: Scalars['Float'];
  totalFeeAmountBaseConverted: Scalars['Float'];
  userCurrency?: Maybe<Scalars['String']>;
};

export type Trigger = Node & {
  __typename?: 'Trigger';
  createGiveawayData?: Maybe<Scalars['JSON']>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  currentValue?: Maybe<Scalars['Float']>;
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  endAt: Scalars['SequelizeDate'];
  gameTypes?: Maybe<Array<GameType>>;
  id: Scalars['ID'];
  isEnabled: Scalars['Boolean'];
  minValue: Scalars['Float'];
  progress: Scalars['Float'];
  startAt: Scalars['SequelizeDate'];
  status: TriggerStatus;
  totalValue?: Maybe<Scalars['Float']>;
  triggerValue?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['SequelizeDate'];
  valueType: TriggerValueType;
};

export type TriggerConnection = {
  __typename?: 'TriggerConnection';
  edges?: Maybe<Array<Maybe<TriggerEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type TriggerDataInput = {
  amount?: InputMaybe<Scalars['Float']>;
  ancestorBoxId?: InputMaybe<Scalars['ID']>;
  channel?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  externalId: Scalars['String'];
  gameType?: InputMaybe<GameType>;
  minPayoutValue?: InputMaybe<Scalars['Float']>;
  payoutItemVariantId?: InputMaybe<Scalars['ID']>;
  rouletteBetMode?: InputMaybe<BetMode>;
  rouletteSelections?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  userId: Scalars['ID'];
  userItemUsed?: InputMaybe<Scalars['Boolean']>;
};

export type TriggerEdge = {
  __typename?: 'TriggerEdge';
  cursor: Scalars['String'];
  node?: Maybe<Trigger>;
};

export enum TriggerOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EndAt = 'END_AT',
  EndAtDesc = 'END_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  StartAt = 'START_AT',
  StartAtDesc = 'START_AT_DESC'
}

export enum TriggerStatus {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED'
}

export type TriggerUserAchievementInput = {
  achievementType: AchievementType;
  secret: Scalars['String'];
  triggerData: TriggerDataInput;
};

export type TriggerUserAchievementPayload = {
  __typename?: 'TriggerUserAchievementPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export enum TriggerValueType {
  Deposit = 'DEPOSIT',
  Wager = 'WAGER'
}

export type UpdateAchievementInput = {
  autoClaim?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  limitPerUser?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  rewards: Array<AchievementRewardInput>;
  rewardsExpireAfterSeconds?: InputMaybe<Scalars['Int']>;
  trigger?: InputMaybe<AchievementTriggerInput>;
};

export type UpdateAchievementPayload = {
  __typename?: 'UpdateAchievementPayload';
  achievement?: Maybe<Achievement>;
};

export type UpdateAffiliatePromoCodeInput = {
  affiliateUserId?: InputMaybe<Scalars['ID']>;
  code: Scalars['String'];
  id: Scalars['ID'];
};

export type UpdateAffiliatePromoCodePayload = {
  __typename?: 'UpdateAffiliatePromoCodePayload';
  id: Scalars['ID'];
  promoCode?: Maybe<PromoCode>;
};

export type UpdateAffiliateTierInput = {
  affiliateTierId: Scalars['ID'];
  ancestorAffiliateTierId?: InputMaybe<Scalars['ID']>;
  canClaimItems?: InputMaybe<Scalars['Boolean']>;
  commissionPercentage?: InputMaybe<Scalars['Float']>;
  commissionRequirement?: InputMaybe<Scalars['Float']>;
  crashPercentage?: InputMaybe<Scalars['Float']>;
  depositPercentage?: InputMaybe<Scalars['Float']>;
  depositRequirement?: InputMaybe<Scalars['Float']>;
  dicePercentage?: InputMaybe<Scalars['Float']>;
  inviteCodeLimit?: InputMaybe<Scalars['Int']>;
  loanLimit?: InputMaybe<Scalars['Int']>;
  matchBettingPercentage?: InputMaybe<Scalars['Float']>;
  minimumActiveReferralsClaimRequirement?: InputMaybe<Scalars['Int']>;
  minimumReferralsClaimRequirement?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  plinkoPercentage?: InputMaybe<Scalars['Float']>;
  promoCodeLimit?: InputMaybe<Scalars['Int']>;
  pvpPercentage?: InputMaybe<Scalars['Float']>;
  roulettePercentage?: InputMaybe<Scalars['Float']>;
  stickyReferees?: InputMaybe<Scalars['Boolean']>;
  unboxingPercentage?: InputMaybe<Scalars['Float']>;
};

export type UpdateAvailableAssetsInput = {
  itemIds: Array<Scalars['ID']>;
};

export type UpdateAvailableAssetsPayload = {
  __typename?: 'UpdateAvailableAssetsPayload';
  success: Scalars['Boolean'];
};

export type UpdateBoxInput = {
  availableFrom?: InputMaybe<Scalars['SequelizeDate']>;
  availableUntil?: InputMaybe<Scalars['SequelizeDate']>;
  backgroundImageUrl?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  discountPrice?: InputMaybe<Scalars['Float']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  houseEdgePercent?: InputMaybe<Scalars['Float']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  levelRequired?: InputMaybe<Scalars['Int']>;
  marketId?: InputMaybe<Scalars['ID']>;
  maxExpectedValue?: InputMaybe<Scalars['Float']>;
  maxPurchasesDaily?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  openable?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  priceFixed?: InputMaybe<Scalars['Float']>;
  purchasable?: InputMaybe<Scalars['Boolean']>;
  sellable?: InputMaybe<Scalars['Boolean']>;
  slots?: InputMaybe<Array<InputMaybe<BoxSlotInput>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ticketsRewarded?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<BoxType>;
  walletRestrictions?: InputMaybe<Array<InputMaybe<WalletType>>>;
};

export type UpdateBoxOrderInput = {
  boxes: Array<BoxOrderItem>;
};

export type UpdateBoxOrderPayload = {
  __typename?: 'UpdateBoxOrderPayload';
  success: Scalars['Boolean'];
};

export type UpdateBoxPayload = {
  __typename?: 'UpdateBoxPayload';
  box: Box;
};

export type UpdateBoxSubscriptionPayload = {
  __typename?: 'UpdateBoxSubscriptionPayload';
  box: Box;
};

export type UpdateCalendarInput = {
  dailyOpenCount?: InputMaybe<Scalars['Int']>;
  endAt?: InputMaybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  rewards?: InputMaybe<Array<CalendarRewardInput>>;
  startAt?: InputMaybe<Scalars['SequelizeDate']>;
};

export type UpdateCalendarPayload = {
  __typename?: 'UpdateCalendarPayload';
  calendar: Calendar;
};

export type UpdateCalendarSubscriptionPayload = {
  __typename?: 'UpdateCalendarSubscriptionPayload';
  calendar: Calendar;
};

export type UpdateCasinoGameInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  casinoGameSelectedProviderId?: InputMaybe<Scalars['ID']>;
  category?: InputMaybe<CasinoGameCategory>;
  description?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  hasFreeSpins?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  isLive?: InputMaybe<Scalars['Boolean']>;
  lines?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  recalledAt?: InputMaybe<Scalars['SequelizeDate']>;
  releasedAt?: InputMaybe<Scalars['SequelizeDate']>;
  selectedFeatureGroup?: InputMaybe<CasinoGameFeatureGroup>;
  slug?: InputMaybe<Scalars['String']>;
  studio?: InputMaybe<CasinoGameProviderCode>;
  title?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UpdateCasinoGameLobbyInput = {
  casinoGameLobbyId: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  positionedCasinoGameInputs?: InputMaybe<Array<PositionedCasinoGameInput>>;
  slug?: InputMaybe<Scalars['String']>;
};

export type UpdateCasinoGameLobbyPayload = {
  __typename?: 'UpdateCasinoGameLobbyPayload';
  casinoGameLobby: CasinoGameLobby;
};

export type UpdateCasinoGameProviderConfigInput = {
  casinoGameId?: InputMaybe<Scalars['ID']>;
  casinoGameProviderId?: InputMaybe<Scalars['ID']>;
  devices?: InputMaybe<Array<Device>>;
  featureGroup?: InputMaybe<CasinoGameFeatureGroup>;
  id: Scalars['ID'];
  identifier?: InputMaybe<Scalars['String']>;
  payout?: InputMaybe<Scalars['Int']>;
  volatilityRating?: InputMaybe<CasinoGameVolatilityRating>;
};

export type UpdateCasinoGameProviderInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  monthlyFeeBasic?: InputMaybe<Scalars['Int']>;
  monthlyFeeBrand?: InputMaybe<Scalars['Int']>;
  monthlyFeeJackpot?: InputMaybe<Scalars['Int']>;
  monthlyFeePartners?: InputMaybe<Scalars['Int']>;
  monthlyFeePremium?: InputMaybe<Scalars['Int']>;
  monthlyFeeTable?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<CasinoGameProviderCode>;
  studio?: InputMaybe<CasinoGameProviderCode>;
  subProvider?: InputMaybe<CasinoGameProviderCode>;
};

export type UpdateCasinoGameSubscriptionPayload = {
  __typename?: 'UpdateCasinoGameSubscriptionPayload';
  casinoGame: CasinoGame;
};

export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  itemCategory?: Maybe<ItemCategory>;
};

export type UpdateCrashBetSubscriptionPayload = {
  __typename?: 'UpdateCrashBetSubscriptionPayload';
  crashBet: CrashBet;
};

export type UpdateCrashGameSubscriptionPayload = {
  __typename?: 'UpdateCrashGameSubscriptionPayload';
  crashGame: CrashGame;
};

export type UpdateCryptoAddressInput = {
  address?: InputMaybe<Scalars['String']>;
  cryptoAddressId: Scalars['ID'];
  default?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  paymentOptionId?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type UpdateDigitalCodeSubscriptionPayload = {
  __typename?: 'UpdateDigitalCodeSubscriptionPayload';
  digitalCode: DigitalCode;
};

export type UpdateDocumentInput = {
  id: Scalars['ID'];
  type?: InputMaybe<DocumentType>;
  upload?: InputMaybe<Array<Scalars['Upload']>>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateDocumentPayload = {
  __typename?: 'UpdateDocumentPayload';
  document?: Maybe<Document>;
};

export type UpdateExchangeRatesInput = {
  baseCurrencies?: InputMaybe<Array<Scalars['String']>>;
  /** @deprecated Use baseCurrencies instead */
  baseCurrency?: InputMaybe<Scalars['String']>;
  fiat?: InputMaybe<Scalars['Boolean']>;
  secret?: InputMaybe<Scalars['String']>;
};

export type UpdateExchangeRatesPayload = {
  __typename?: 'UpdateExchangeRatesPayload';
  success: Scalars['Boolean'];
};

export type UpdateGameJackpotPayload = {
  __typename?: 'UpdateGameJackpotPayload';
  gameJackpot: GameJackpot;
};

export type UpdateGameJackpotSubscriptionPayload = {
  __typename?: 'UpdateGameJackpotSubscriptionPayload';
  gameJackpot: GameJackpot;
};

export type UpdateGameSubscriptionPayload = {
  __typename?: 'UpdateGameSubscriptionPayload';
  game: Game;
};

export type UpdateGemstoneBoostInput = {
  endAt?: InputMaybe<Scalars['SequelizeDate']>;
  gemstoneBoostId: Scalars['ID'];
  secret?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GemstoneBoostStatus>;
};

export type UpdateGemstoneBoostPayload = {
  __typename?: 'UpdateGemstoneBoostPayload';
  gemstoneBoost?: Maybe<GemstoneBoost>;
};

export type UpdateGemstoneBoostSubscriptionPayload = {
  __typename?: 'UpdateGemstoneBoostSubscriptionPayload';
  gemstoneBoostInfo: GemstoneBoostInfo;
};

export type UpdateGiftCardOptionInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  externalUrl?: InputMaybe<Scalars['String']>;
  giftCardOptionId: Scalars['ID'];
  iconUrl?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
};

export type UpdateGiftCardOptionPayload = {
  __typename?: 'UpdateGiftCardOptionPayload';
  giftCardOption?: Maybe<GiftCardOption>;
};

export type UpdateGiveawayInput = {
  giveawayId: Scalars['ID'];
  secret?: InputMaybe<Scalars['String']>;
  status: GiveawayStatus;
};

export type UpdateGiveawayPayload = {
  __typename?: 'UpdateGiveawayPayload';
  giveaway?: Maybe<Giveaway>;
};

export type UpdateInviteCodeInput = {
  code?: InputMaybe<Scalars['String']>;
  increaseInviteCountBy?: InputMaybe<Scalars['Int']>;
  inviteCodeId: Scalars['ID'];
};

export type UpdateInviteCodePayload = {
  __typename?: 'UpdateInviteCodePayload';
  inviteCode: InviteCode;
};

export type UpdateItemCategoryInput = {
  defaultExchangeRate?: InputMaybe<Scalars['Float']>;
  defaultMarkup?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  shippingInfo?: InputMaybe<Scalars['String']>;
};

export type UpdateItemCategorySubscriptionPayload = {
  __typename?: 'UpdateItemCategorySubscriptionPayload';
  itemCategory: ItemCategory;
};

export type UpdateItemDisplayValuesInput = {
  categoryId?: InputMaybe<Scalars['ID']>;
  marketId: Scalars['ID'];
  multiply: Scalars['Float'];
};

export type UpdateItemDisplayValuesPayload = {
  __typename?: 'UpdateItemDisplayValuesPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateItemExchangeRatesInput = {
  categoryId?: InputMaybe<Scalars['ID']>;
  exchangeRate: Scalars['Float'];
  marketId: Scalars['ID'];
};

export type UpdateItemExchangeRatesPayload = {
  __typename?: 'UpdateItemExchangeRatesPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateItemInput = {
  brand?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  displayValue?: InputMaybe<Scalars['Float']>;
  exchangeRate?: InputMaybe<Scalars['Float']>;
  externalId?: InputMaybe<Scalars['String']>;
  externalMedia?: InputMaybe<Array<ItemExternalMediaInput>>;
  iconUrl?: InputMaybe<Scalars['String']>;
  itemId: Scalars['ID'];
  markup?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  obtainable?: InputMaybe<Scalars['Boolean']>;
  purchaseUrl?: InputMaybe<Scalars['String']>;
  releasedAt?: InputMaybe<Scalars['SequelizeDate']>;
  shippingCost?: InputMaybe<Scalars['Float']>;
  shippingInfo?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<ItemTagInput>>;
  usable?: InputMaybe<Scalars['Boolean']>;
  withdrawable?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateItemMarkupsInput = {
  categoryId?: InputMaybe<Scalars['ID']>;
  marketId: Scalars['ID'];
  markup: Scalars['Float'];
};

export type UpdateItemMarkupsPayload = {
  __typename?: 'UpdateItemMarkupsPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateItemPayload = {
  __typename?: 'UpdateItemPayload';
  item?: Maybe<Item>;
};

export type UpdateItemSubscriptionPayload = {
  __typename?: 'UpdateItemSubscriptionPayload';
  item: Item;
};

export type UpdateItemValuesInput = {
  categoryId?: InputMaybe<Scalars['ID']>;
  marketId: Scalars['ID'];
  multiply: Scalars['Float'];
};

export type UpdateItemValuesPayload = {
  __typename?: 'UpdateItemValuesPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateItemVariantInput = {
  approvalStrategy?: InputMaybe<ItemVariantApprovalStrategy>;
  brand?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['ID']>;
  color?: InputMaybe<Scalars['String']>;
  depositable?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  displayValue?: InputMaybe<Scalars['Float']>;
  exchangeRate?: InputMaybe<Scalars['Float']>;
  externalId?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  itemVariantId: Scalars['ID'];
  markup?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  obtainable?: InputMaybe<Scalars['Boolean']>;
  purchasable?: InputMaybe<ItemPurchasable>;
  purchaseUrl?: InputMaybe<Scalars['String']>;
  rarity?: InputMaybe<Scalars['String']>;
  releasedAt?: InputMaybe<Scalars['SequelizeDate']>;
  /** @deprecated Use retailerId */
  retailer?: InputMaybe<Retailer>;
  retailerId?: InputMaybe<Scalars['ID']>;
  shippingCost?: InputMaybe<Scalars['Float']>;
  shippingInfo?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
  usable?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Float']>;
  withdrawable?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateItemVariantPayload = {
  __typename?: 'UpdateItemVariantPayload';
  itemVariant?: Maybe<ItemVariant>;
};

export type UpdateItemVariantSubscriptionPayload = {
  __typename?: 'UpdateItemVariantSubscriptionPayload';
  itemVariant: ItemVariant;
};

export type UpdateItemVariantsPayload = {
  __typename?: 'UpdateItemVariantsPayload';
  itemVariants: Array<Maybe<ItemVariant>>;
  total?: Maybe<Scalars['Int']>;
};

export type UpdateJackpotInput = {
  chance: Scalars['Float'];
  gameWageringRequirements: Array<GameWageringRequirementInput>;
  initialValue: Scalars['Int'];
  jackpotId: Scalars['ID'];
  payoutConfig?: InputMaybe<JackpotPayoutConfigInput>;
  payoutType?: InputMaybe<JackpotPayoutType>;
  scheduledAt?: InputMaybe<Scalars['SequelizeDate']>;
  userRequirements?: InputMaybe<UserRequirementsInput>;
  wager: Scalars['Float'];
  wishlistTicketAmount?: InputMaybe<Array<JackpotWishlistTicketAmountInput>>;
  won?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateJackpotPayload = {
  __typename?: 'UpdateJackpotPayload';
  jackpot?: Maybe<Jackpot>;
};

export type UpdateJackpotSubscriptionPayload = {
  __typename?: 'UpdateJackpotSubscriptionPayload';
  jackpot: Jackpot;
};

export type UpdateLoanRequestPayload = {
  __typename?: 'UpdateLoanRequestPayload';
  affiliateLoanRequest?: Maybe<AffiliateLoanRequest>;
};

export type UpdateMarketPayload = {
  __typename?: 'UpdateMarketPayload';
  market?: Maybe<Market>;
};

export type UpdateMatchBettingGameSubscriptionPayload = {
  __typename?: 'UpdateMatchBettingGameSubscriptionPayload';
  matchBettingGame: MatchBettingGame;
};

export type UpdateMatchBettingLeagueSubscriptionPayload = {
  __typename?: 'UpdateMatchBettingLeagueSubscriptionPayload';
  matchBettingLeague: MatchBettingLeague;
};

export type UpdateMatchBettingMarketSubscriptionPayload = {
  __typename?: 'UpdateMatchBettingMarketSubscriptionPayload';
  matchBettingMarket: MatchBettingMarket;
};

export type UpdateMatchBettingMatchSubscriptionPayload = {
  __typename?: 'UpdateMatchBettingMatchSubscriptionPayload';
  matchBettingMatch: MatchBettingMatch;
};

export type UpdateMatchBettingPlayerSubscriptionPayload = {
  __typename?: 'UpdateMatchBettingPlayerSubscriptionPayload';
  matchBettingPlayer: MatchBettingPlayer;
};

export type UpdateMatchBettingSerieSubscriptionPayload = {
  __typename?: 'UpdateMatchBettingSerieSubscriptionPayload';
  matchBettingSerie: MatchBettingSerie;
};

export type UpdateMatchBettingSlipInput = {
  matchBettingSlipId: Scalars['ID'];
  status: MatchBettingSlipStatus;
};

export type UpdateMatchBettingSlipPayload = {
  __typename?: 'UpdateMatchBettingSlipPayload';
  matchBettingSlip: MatchBettingSlip;
};

export type UpdateMatchBettingSlipSubscriptionPayload = {
  __typename?: 'UpdateMatchBettingSlipSubscriptionPayload';
  matchBettingSlip: MatchBettingSlip;
};

export type UpdateMatchBettingTeamSubscriptionPayload = {
  __typename?: 'UpdateMatchBettingTeamSubscriptionPayload';
  matchBettingTeam: MatchBettingTeam;
};

export type UpdateMatchBettingTournamentSubscriptionPayload = {
  __typename?: 'UpdateMatchBettingTournamentSubscriptionPayload';
  matchBettingTournament: MatchBettingTournament;
};

export type UpdateNotificationMessageSubscriptionPayload = {
  __typename?: 'UpdateNotificationMessageSubscriptionPayload';
  notificationMessage: NotificationMessage;
};

export type UpdateNotificationSubscriptionPayload = {
  __typename?: 'UpdateNotificationSubscriptionPayload';
  notification: Notification;
};

export type UpdateOrderInput = {
  cost: Scalars['Float'];
  deliveryCost: Scalars['Float'];
  estimatedDeliveryInDays?: InputMaybe<Scalars['String']>;
  orderId: Scalars['ID'];
  screenshotUrl: Scalars['String'];
  trackingUrl?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderPayload = {
  __typename?: 'UpdateOrderPayload';
  order?: Maybe<Order>;
};

export type UpdateOrderSubscriptionPayload = {
  __typename?: 'UpdateOrderSubscriptionPayload';
  order: Order;
};

export type UpdatePaymentOptionInput = {
  action?: InputMaybe<PaymentOptionAction>;
  approximateAmount?: InputMaybe<Scalars['Boolean']>;
  bonusMaxAmount?: InputMaybe<Scalars['Float']>;
  bonusPercent?: InputMaybe<Scalars['Float']>;
  canRefund?: InputMaybe<Scalars['Boolean']>;
  confirmationsRequired?: InputMaybe<Scalars['Int']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  extraProcessingIfRiskScoreAtLeast?: InputMaybe<Scalars['Float']>;
  fixedFee?: InputMaybe<Scalars['Float']>;
  fraudCheckAfter?: InputMaybe<Scalars['Boolean']>;
  fraudCheckBefore?: InputMaybe<Scalars['Boolean']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  maxAmount?: InputMaybe<Scalars['Float']>;
  method?: InputMaybe<PaymentMethod>;
  methodName?: InputMaybe<Scalars['String']>;
  minAmount?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<Scalars['Int']>;
  percentageFee?: InputMaybe<Scalars['Float']>;
  provider?: InputMaybe<PaymentProvider>;
  providerConfig?: InputMaybe<PaymentOptionProviderConfigInput>;
  providerName?: InputMaybe<Scalars['String']>;
  requiresEmail?: InputMaybe<Scalars['Boolean']>;
  requiresProfile?: InputMaybe<Scalars['Boolean']>;
  totalMaxAmount?: InputMaybe<Scalars['Float']>;
  totalMaxAmountDuration?: InputMaybe<Scalars['Duration']>;
  transactionType?: InputMaybe<PaymentOptionTransactionType>;
  type?: InputMaybe<Scalars['String']>;
  visible?: InputMaybe<Scalars['Boolean']>;
  whitelistedCountries?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdatePaymentOptionPayload = {
  __typename?: 'UpdatePaymentOptionPayload';
  paymentOption?: Maybe<PaymentOption>;
};

export type UpdatePollInput = {
  correctAnswer?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  endAt?: InputMaybe<Scalars['SequelizeDate']>;
  name?: InputMaybe<Scalars['String']>;
  pollId: Scalars['ID'];
  startAt?: InputMaybe<Scalars['SequelizeDate']>;
  userRequirements?: InputMaybe<PollUserRequirementsInput>;
};

export type UpdatePollOptionInput = {
  name?: InputMaybe<Scalars['String']>;
  pollOptionId: Scalars['ID'];
  won?: InputMaybe<Scalars['Boolean']>;
};

export type UpdatePollOptionPayload = {
  __typename?: 'UpdatePollOptionPayload';
  pollOption?: Maybe<PollOption>;
};

export type UpdatePollPayload = {
  __typename?: 'UpdatePollPayload';
  poll?: Maybe<Poll>;
};

export type UpdatePollStatusInput = {
  pollId: Scalars['ID'];
  secret?: InputMaybe<Scalars['String']>;
  status: PollStatus;
};

export type UpdatePollStatusPayload = {
  __typename?: 'UpdatePollStatusPayload';
  poll?: Maybe<Poll>;
};

export type UpdatePromoCodeInput = {
  affiliateUserId?: InputMaybe<Scalars['ID']>;
  amount: Scalars['Int'];
  balance: Scalars['Float'];
  boxId?: InputMaybe<Scalars['ID']>;
  code: Scalars['String'];
  id: Scalars['ID'];
  itemVariantId?: InputMaybe<Scalars['ID']>;
  maxBalance?: InputMaybe<Scalars['Float']>;
  maxRedeemCount?: InputMaybe<Scalars['Int']>;
  minDepositRequirement?: InputMaybe<Scalars['Float']>;
  percentageReward?: InputMaybe<Scalars['Float']>;
  type: PromoCodeType;
  walletType?: InputMaybe<WalletType>;
};

export type UpdatePromoCodeSubscriptionPayload = {
  __typename?: 'UpdatePromoCodeSubscriptionPayload';
  promoCode: PromoCode;
};

export type UpdateProxyInput = {
  id: Scalars['String'];
  uri: Scalars['Url'];
};

export type UpdateProxyPayload = {
  __typename?: 'UpdateProxyPayload';
  proxy: Proxy;
};

export type UpdatePvpBetSubscriptionPayload = {
  __typename?: 'UpdatePvpBetSubscriptionPayload';
  pvpBet: PvpBet;
};

export type UpdatePvpBotDataInput = {
  alertOnReserveUse?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  maxBetAmount?: InputMaybe<Scalars['Float']>;
  minBetAmount?: InputMaybe<Scalars['Float']>;
  remainingReserveUses?: InputMaybe<Scalars['Int']>;
  reserveBalance?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<PvpBotStatus>;
};

export type UpdatePvpBotInput = {
  data: UpdatePvpBotDataInput;
  pvpBotId: Scalars['ID'];
};

export type UpdatePvpBotPayload = {
  __typename?: 'UpdatePvpBotPayload';
  pvpBot: PvpBot;
};

export type UpdatePvpBotSubscriptionPayload = {
  __typename?: 'UpdatePvpBotSubscriptionPayload';
  pvpBot: PvpBot;
};

export type UpdatePvpGameSubscriptionPayload = {
  __typename?: 'UpdatePvpGameSubscriptionPayload';
  pvpGame: PvpGame;
};

export type UpdatePvpRoundSubscriptionPayload = {
  __typename?: 'UpdatePvpRoundSubscriptionPayload';
  pvpRound: PvpRound;
};

export type UpdateRetailerInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  retailerId: Scalars['ID'];
};

export type UpdateSettingInput = {
  id?: InputMaybe<Scalars['ID']>;
  jsonSchema?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  value: Scalars['String'];
};

export type UpdateSettingPayload = {
  __typename?: 'UpdateSettingPayload';
  setting?: Maybe<Setting>;
};

export type UpdateSettingSubscriptionPayload = {
  __typename?: 'UpdateSettingSubscriptionPayload';
  setting: Setting;
};

export type UpdateSocialStoryInput = {
  id: Scalars['ID'];
  position?: InputMaybe<Scalars['Int']>;
  url?: InputMaybe<Scalars['String']>;
};

export type UpdateSocialStoryPayload = {
  __typename?: 'UpdateSocialStoryPayload';
  socialStory: SocialStory;
};

export type UpdateSteamAssetSubscriptionPayload = {
  __typename?: 'UpdateSteamAssetSubscriptionPayload';
  steamAsset: SteamAsset;
};

export type UpdateSteamBotPayload = {
  __typename?: 'UpdateSteamBotPayload';
  steamBot?: Maybe<SteamBot>;
};

export type UpdateSteamBotSubscriptionPayload = {
  __typename?: 'UpdateSteamBotSubscriptionPayload';
  steamBot: SteamBot;
};

export type UpdateSteamOfferSubscriptionPayload = {
  __typename?: 'UpdateSteamOfferSubscriptionPayload';
  steamOffer: SteamOffer;
};

export type UpdateSteamStatusInput = {
  addTask?: InputMaybe<Scalars['Boolean']>;
  secret?: InputMaybe<Scalars['String']>;
};

export type UpdateSteamStatusPayload = {
  __typename?: 'UpdateSteamStatusPayload';
  status: Scalars['String'];
};

export type UpdateSuspectedTraderInput = {
  userId: Scalars['ID'];
};

export type UpdateSuspectedTraderPayload = {
  __typename?: 'UpdateSuspectedTraderPayload';
  user?: Maybe<User>;
};

export type UpdateTagInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  position?: InputMaybe<Scalars['Int']>;
  visible: Scalars['Boolean'];
};

export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  tag?: Maybe<Tag>;
};

export type UpdateTagSubscriptionPayload = {
  __typename?: 'UpdateTagSubscriptionPayload';
  tag: Tag;
};

export type UpdateTileSettingInput = {
  claimableTiles: Scalars['Int'];
  levelRequired: Scalars['Int'];
  marketId?: InputMaybe<Scalars['ID']>;
  minRewardPerTile: Scalars['Float'];
  tileSettingId: Scalars['ID'];
};

export type UpdateTradeSubscriptionPayload = {
  __typename?: 'UpdateTradeSubscriptionPayload';
  trade: Trade;
};

export type UpdateTradesMarkupInput = {
  itemVariantIds: Array<Scalars['ID']>;
  secret?: InputMaybe<Scalars['String']>;
};

export type UpdateTradesMarkupPayload = {
  __typename?: 'UpdateTradesMarkupPayload';
  trades: Array<Trade>;
};

export type UpdateTransactionInput = {
  status: TransactionStatus;
  transactionId: Scalars['ID'];
};

export type UpdateTransactionPayload = {
  __typename?: 'UpdateTransactionPayload';
  transaction?: Maybe<Transaction>;
};

export type UpdateTransactionSubscriptionPayload = {
  __typename?: 'UpdateTransactionSubscriptionPayload';
  transaction: Transaction;
};

export type UpdateTriggerInput = {
  createGiveawayInput?: InputMaybe<CreateGiveawayInput>;
  endAt?: InputMaybe<Scalars['SequelizeDate']>;
  gameTypes?: InputMaybe<Array<GameType>>;
  minValue?: InputMaybe<Scalars['Float']>;
  secret?: InputMaybe<Scalars['String']>;
  startAt?: InputMaybe<Scalars['SequelizeDate']>;
  triggerId: Scalars['ID'];
  triggerValue?: InputMaybe<Scalars['Float']>;
};

export type UpdateTriggerPayload = {
  __typename?: 'UpdateTriggerPayload';
  trigger?: Maybe<Trigger>;
};

export type UpdateTriggerStatusInput = {
  scheduleAt?: InputMaybe<Scalars['SequelizeDate']>;
  secret?: InputMaybe<Scalars['String']>;
  status: TriggerStatus;
  triggerId: Scalars['ID'];
};

export type UpdateUserAchievementSubscriptionPayload = {
  __typename?: 'UpdateUserAchievementSubscriptionPayload';
  userAchievement: UserAchievement;
};

export type UpdateUserAddressInput = {
  address1: Scalars['String'];
  address2?: InputMaybe<Scalars['String']>;
  alias?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  default?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
  region: Scalars['String'];
  userAddressId: Scalars['ID'];
};

export type UpdateUserBoxSubscriptionPayload = {
  __typename?: 'UpdateUserBoxSubscriptionPayload';
  userBox: UserBox;
};

export type UpdateUserEmailInput = {
  email: Scalars['String'];
  redirectUri: Scalars['String'];
  twoFactorToken?: InputMaybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type UpdateUserEmailPayload = {
  __typename?: 'UpdateUserEmailPayload';
  user?: Maybe<User>;
};

export type UpdateUserGiveawayPayload = {
  __typename?: 'UpdateUserGiveawayPayload';
  userGiveaway?: Maybe<UserGiveaway>;
};

export type UpdateUserInput = {
  ancestorAffiliateTierId?: InputMaybe<Scalars['ID']>;
  authentic?: InputMaybe<Scalars['Boolean']>;
  banReason?: InputMaybe<Scalars['String']>;
  bannedUntil?: InputMaybe<Scalars['SequelizeDate']>;
  customTitle?: InputMaybe<Scalars['String']>;
  customTitleColor?: InputMaybe<Scalars['String']>;
  dailyWithdrawLimit?: InputMaybe<Scalars['Float']>;
  displayName?: InputMaybe<Scalars['String']>;
  forceBlankAvatar?: InputMaybe<Scalars['Boolean']>;
  hideSteamProfile?: InputMaybe<Scalars['Boolean']>;
  marketId?: InputMaybe<Scalars['ID']>;
  marketingEmails?: InputMaybe<Scalars['Boolean']>;
  matchBettingBanReason?: InputMaybe<Scalars['String']>;
  matchBettingBannedUntil?: InputMaybe<Scalars['SequelizeDate']>;
  matchBettingMaximumTotalBetAmount?: InputMaybe<Scalars['Float']>;
  microphoneEnabled?: InputMaybe<Scalars['Boolean']>;
  mutedUntil?: InputMaybe<Scalars['SequelizeDate']>;
  permissions?: InputMaybe<Scalars['Int']>;
  rank?: InputMaybe<Scalars['Int']>;
  referralPromoCode?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<InputMaybe<UserRole>>>;
  steamApiKey?: InputMaybe<Scalars['String']>;
  steamTradeUrl?: InputMaybe<Scalars['String']>;
  supplier?: InputMaybe<Scalars['Boolean']>;
  suspectedTrader?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  teamId?: InputMaybe<Scalars['ID']>;
  tradeBanReason?: InputMaybe<Scalars['String']>;
  tradeBannedUntil?: InputMaybe<Scalars['SequelizeDate']>;
  trader?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['ID'];
  verificationStatus?: InputMaybe<VerificationStatus>;
};

export type UpdateUserItemInput = {
  comment?: InputMaybe<Scalars['String']>;
  status: UserItemStatus;
  userItemId: Scalars['ID'];
};

export type UpdateUserItemPayload = {
  __typename?: 'UpdateUserItemPayload';
  userItem: UserItem;
};

export type UpdateUserItemShipToInput = {
  shipTo: ShipToInput;
  userItemId: Scalars['ID'];
};

export type UpdateUserItemSubscriptionPayload = {
  __typename?: 'UpdateUserItemSubscriptionPayload';
  userItem: UserItem;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  user?: Maybe<User>;
};

export type UpdateUserPreferencesInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  birthDate?: InputMaybe<Scalars['SequelizeDate']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  hideProfileStats?: InputMaybe<Scalars['Boolean']>;
  hideSteamProfile?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type UpdateUserPreferencesPayload = {
  __typename?: 'UpdateUserPreferencesPayload';
  userPreferences?: Maybe<UserPreferences>;
};

export type UpdateUserProgressSubscriptionPayload = {
  __typename?: 'UpdateUserProgressSubscriptionPayload';
  source?: Maybe<UserProgressSource>;
  userProgress: UserProgress;
};

export type UpdateUserSubscriptionPayload = {
  __typename?: 'UpdateUserSubscriptionPayload';
  user: User;
};

export type UpdateUserTierAssetInput = {
  addToRank?: InputMaybe<Scalars['Int']>;
  assetId?: InputMaybe<Scalars['ID']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  rakebackPrice?: InputMaybe<Scalars['Float']>;
  removeFromRank?: InputMaybe<Scalars['Int']>;
  userTierId?: InputMaybe<Scalars['ID']>;
};

export type UpdateUserTierAssetSubscriptionPayload = {
  __typename?: 'UpdateUserTierAssetSubscriptionPayload';
  userTierAsset: UserTierAsset;
};

export type UpdateUserTierInput = {
  arPercentage?: InputMaybe<Scalars['Float']>;
  assetId?: InputMaybe<Scalars['ID']>;
  ggr?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  rakeback?: InputMaybe<Scalars['Float']>;
  rank?: InputMaybe<Scalars['Int']>;
  rewards?: InputMaybe<Array<ArAchievementInput>>;
};

export type UpdateWalletInput = {
  diff: Scalars['Float'];
  note: Scalars['String'];
  type?: InputMaybe<WalletChangeType>;
  walletId: Scalars['ID'];
};

export type UpdateWalletPayload = {
  __typename?: 'UpdateWalletPayload';
  note?: Maybe<Note>;
  /** @deprecated Not used */
  type?: Maybe<WalletChangeType>;
  /** @deprecated Use wallets instead */
  wallet?: Maybe<Wallet>;
  wallets?: Maybe<Array<Wallet>>;
};

export type UpdateWalletSubscriptionPayload = {
  __typename?: 'UpdateWalletSubscriptionPayload';
  wallet: Wallet;
  walletChange: WalletChange;
};

export type UpdateWaxPeerTradeSubscriptionPayload = {
  __typename?: 'UpdateWaxPeerTradeSubscriptionPayload';
  waxPeerTrade: WaxPeerTrade;
};

export type UpdateWishlistInput = {
  itemVariantIds: Array<Scalars['ID']>;
  wishlistId: Scalars['ID'];
};

export type UpdateWishlistPayload = {
  __typename?: 'UpdateWishlistPayload';
  wishlist?: Maybe<Wishlist>;
};

export type UpdateWithdrawalRequestInput = {
  amount: Scalars['Float'];
  status: WithdrawalRequestStatus;
  withdrawalRequestId: Scalars['ID'];
};

export type UpdateWithdrawalRequestPayload = {
  __typename?: 'UpdateWithdrawalRequestPayload';
  withdrawalRequest: WithdrawalRequest;
};

export type UpdateWithdrawalRequestSubscriptionPayload = {
  __typename?: 'UpdateWithdrawalRequestSubscriptionPayload';
  withdrawalRequest: WithdrawalRequest;
};

export type UpdateZbtTradeSubscriptionPayload = {
  __typename?: 'UpdateZbtTradeSubscriptionPayload';
  zbtTrade: ZbtTrade;
};

export type UpdateZincOrderSubscriptionPayload = {
  __typename?: 'UpdateZincOrderSubscriptionPayload';
  zincOrder: ZincOrder;
};

export type UsePromoCodeInput = {
  code: Scalars['String'];
  recaptcha: Scalars['String'];
  seonSession?: InputMaybe<Scalars['String']>;
  visualRecaptcha?: InputMaybe<Scalars['String']>;
};

export type UsedPromoCodeSubscriptionPayload = {
  __typename?: 'UsedPromoCodeSubscriptionPayload';
  createdAt: Scalars['SequelizeDate'];
  promoCode: PromoCode;
  user: User;
};

export type User = Node & {
  __typename?: 'User';
  acceptTos?: Maybe<Scalars['Boolean']>;
  achievements: AchievementConnection;
  affiliate?: Maybe<User>;
  affiliatePromoCodes: Array<PromoCode>;
  affiliateTier?: Maybe<AffiliateTier>;
  affiliateTierId?: Maybe<Scalars['ID']>;
  affiliateUserId?: Maybe<Scalars['ID']>;
  affiliatedUsers: UserConnection;
  authentic?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  avatarOriginal?: Maybe<Scalars['String']>;
  banReason?: Maybe<Scalars['String']>;
  bannedUntil?: Maybe<Scalars['SequelizeDate']>;
  createdAt: Scalars['SequelizeDate'];
  cryptoAddresses: CryptoAddressConnection;
  currency: Scalars['String'];
  customAffiliateId?: Maybe<Scalars['String']>;
  customTitle?: Maybe<Scalars['String']>;
  customTitleColor?: Maybe<Scalars['String']>;
  dailyConsecutiveActiveCount: Scalars['Int'];
  dailyWithdrawLimit?: Maybe<Scalars['Float']>;
  dailyWithdrawalRemainder?: Maybe<DailyWithdrawalRemainder>;
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  displayName?: Maybe<Scalars['String']>;
  documents: DocumentConnection;
  email?: Maybe<Scalars['String']>;
  emailToVerify?: Maybe<Scalars['String']>;
  forceBlankAvatar?: Maybe<Scalars['Boolean']>;
  hideSteamProfile?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  initialAffiliate?: Maybe<User>;
  lastActiveAt?: Maybe<Scalars['SequelizeDate']>;
  lastDepositAt?: Maybe<Scalars['SequelizeDate']>;
  lastPaypalDepositAt?: Maybe<Scalars['SequelizeDate']>;
  /** @deprecated Use userProgress level instead */
  level?: Maybe<Scalars['Int']>;
  market?: Maybe<Market>;
  marketId?: Maybe<Scalars['ID']>;
  marketingEmails: Scalars['Boolean'];
  matchBettingBanReason?: Maybe<Scalars['String']>;
  matchBettingBannedUntil?: Maybe<Scalars['SequelizeDate']>;
  matchBettingMaximumTotalBetAmount?: Maybe<Scalars['Float']>;
  messages: MessageConnection;
  meta?: Maybe<UserMeta>;
  microphoneEnabled: Scalars['Boolean'];
  mutedUntil?: Maybe<Scalars['SequelizeDate']>;
  name?: Maybe<Scalars['String']>;
  notifications: NotificationConnection;
  online?: Maybe<Scalars['Boolean']>;
  openId?: Maybe<Scalars['String']>;
  orders: OrderConnection;
  permissions?: Maybe<Scalars['Int']>;
  preferences?: Maybe<UserPreferences>;
  rank?: Maybe<Scalars['Int']>;
  referralPromoCode?: Maybe<PromoCode>;
  referralPromoCodeId?: Maybe<Scalars['ID']>;
  roles?: Maybe<Array<Maybe<UserRole>>>;
  seeds: SeedConnection;
  steamApiKey?: Maybe<Scalars['String']>;
  steamBot?: Maybe<SteamBot>;
  steamDisplayName?: Maybe<Scalars['String']>;
  steamId?: Maybe<Scalars['String']>;
  steamTradeUrl?: Maybe<Scalars['String']>;
  stickyReferee: Scalars['Boolean'];
  supplier: Scalars['Boolean'];
  suspectedTrader: Scalars['Boolean'];
  tags?: Maybe<Array<Tag>>;
  team?: Maybe<Team>;
  teamId?: Maybe<Scalars['ID']>;
  tickets: TicketConnection;
  tier?: Maybe<UserTier>;
  totalClaimedAr?: Maybe<Scalars['Float']>;
  totalClaimedRakeback?: Maybe<Scalars['Float']>;
  totalCommissionEarnt?: Maybe<Scalars['Decimal']>;
  totalDeposit?: Maybe<Scalars['Decimal']>;
  totalDepositOfReferredUsers?: Maybe<Scalars['Decimal']>;
  totalDepositorsReferred?: Maybe<Scalars['Int']>;
  totalRakeback?: Maybe<Scalars['Float']>;
  totalReferredDepositValue?: Maybe<Scalars['Decimal']>;
  totalUserItemValue?: Maybe<Scalars['Float']>;
  totalUsersReferred?: Maybe<Scalars['Int']>;
  totalWithdraw?: Maybe<Scalars['Decimal']>;
  totalWithdrawOfReferredUsers?: Maybe<Scalars['Decimal']>;
  totpTwoFactorEnabled?: Maybe<Scalars['Boolean']>;
  tradeBanReason?: Maybe<Scalars['String']>;
  tradeBannedSource?: Maybe<UserTradeBannedType>;
  tradeBannedUntil?: Maybe<Scalars['SequelizeDate']>;
  trader: Scalars['Boolean'];
  transactions: TransactionConnection;
  twitterId?: Maybe<Scalars['String']>;
  unlockedChat?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['SequelizeDate'];
  userItems: UserItemConnection;
  userProgress?: Maybe<UserProgress>;
  verificationStatus?: Maybe<VerificationStatus>;
  verified?: Maybe<Scalars['Boolean']>;
  walletChanges: WalletChangeConnection;
  wallets?: Maybe<Array<Maybe<Wallet>>>;
  withdrawalRestrictions?: Maybe<UserWithdrawalRestrictions>;
};


export type UserAchievementsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};


export type UserAffiliatedUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
};


export type UserDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};


export type UserMessagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};


export type UserNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationOrderBy>>>;
  unreadOnly?: InputMaybe<Scalars['Boolean']>;
};


export type UserOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderOrderBy>>>;
};


export type UserSeedsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};


export type UserTicketsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  jackpotId?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};


export type UserTotalUserItemValueArgs = {
  status?: InputMaybe<Array<UserItemStatus>>;
};


export type UserTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};


export type UserUserItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  status?: InputMaybe<Array<UserItemStatus>>;
};


export type UserWalletChangesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<WalletChangeOrderBy>>>;
};


export type UserWalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
};

export type UserAchievement = Node & {
  __typename?: 'UserAchievement';
  achievement: Achievement;
  achievementId: Scalars['ID'];
  /** @deprecated Use rewards instead */
  bonusAmount?: Maybe<Scalars['Float']>;
  /** @deprecated Use rewardsExpireAt instead */
  bonusExpiresAt?: Maybe<Scalars['SequelizeDate']>;
  claimedAt?: Maybe<Scalars['SequelizeDate']>;
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  rewards: Array<AchievementReward>;
  rewardsExpireAt?: Maybe<Scalars['SequelizeDate']>;
  source: SourceModels;
  sourceId?: Maybe<Scalars['Int']>;
  sourceModel?: Maybe<Scalars['String']>;
  type?: Maybe<AchievementType>;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  /** @deprecated Use rewards instead */
  xpAmount?: Maybe<Scalars['Int']>;
};

export type UserAchievementConnection = {
  __typename?: 'UserAchievementConnection';
  edges?: Maybe<Array<Maybe<UserAchievementEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type UserAchievementEdge = {
  __typename?: 'UserAchievementEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserAchievement>;
};

export enum UserAchievementOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type UserAddress = Node & {
  __typename?: 'UserAddress';
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Country;
  createdAt: Scalars['SequelizeDate'];
  default: Scalars['Boolean'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
  region: Scalars['String'];
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId: Scalars['ID'];
};

export type UserAddressConnection = {
  __typename?: 'UserAddressConnection';
  edges?: Maybe<Array<Maybe<UserAddressEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type UserAddressEdge = {
  __typename?: 'UserAddressEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserAddress>;
};

export enum UserAddressOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type UserAddressPayload = {
  __typename?: 'UserAddressPayload';
  userAddress: UserAddress;
};

export enum UserAffiliateStatus {
  Active = 'ACTIVE',
  Retargetable = 'RETARGETABLE',
  Stealable = 'STEALABLE',
  Stolen = 'STOLEN',
  Unconverted = 'UNCONVERTED'
}

export type UserAsset = Node & {
  __typename?: 'UserAsset';
  assetRankAtBuy?: Maybe<Scalars['Int']>;
  consumedRakebackValue: Scalars['Float'];
  createdAt: Scalars['SequelizeDate'];
  id: Scalars['ID'];
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  userTierAsset?: Maybe<UserTierAsset>;
  userTierAssetId: Scalars['ID'];
};

export type UserAssetConnection = {
  __typename?: 'UserAssetConnection';
  edges?: Maybe<Array<Maybe<UserAssetEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type UserAssetEdge = {
  __typename?: 'UserAssetEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserAsset>;
};

export enum UserAssetOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type UserBox = Node & {
  __typename?: 'UserBox';
  acquiredValue: Scalars['Float'];
  ancestorBox?: Maybe<Box>;
  ancestorBoxId?: Maybe<Scalars['ID']>;
  box: Box;
  boxId: Scalars['ID'];
  consumedAt?: Maybe<Scalars['SequelizeDate']>;
  consumedValue?: Maybe<Scalars['Float']>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  pvpBet?: Maybe<PvpBet>;
  pvpBetId?: Maybe<Scalars['ID']>;
  pvpGame?: Maybe<PvpGame>;
  pvpGameId?: Maybe<Scalars['ID']>;
  refundValue?: Maybe<Scalars['Float']>;
  refundValueInUserCurrency?: Maybe<Scalars['Float']>;
  refundedAt?: Maybe<Scalars['SequelizeDate']>;
  refundedValue?: Maybe<Scalars['Float']>;
  status: UserBoxStatus;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
};

export type UserBoxConnection = {
  __typename?: 'UserBoxConnection';
  edges?: Maybe<Array<Maybe<UserBoxEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type UserBoxEdge = {
  __typename?: 'UserBoxEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserBox>;
};

export enum UserBoxOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Value = 'VALUE',
  ValueDesc = 'VALUE_DESC'
}

export enum UserBoxStatus {
  Available = 'AVAILABLE',
  Consumed = 'CONSUMED',
  Refunded = 'REFUNDED'
}

export type UserCommunication = Node & {
  __typename?: 'UserCommunication';
  id: Scalars['ID'];
  mutedUser: User;
  mutedUserId: Scalars['ID'];
  user: User;
  userId: Scalars['ID'];
};

export type UserCommunicationConnection = {
  __typename?: 'UserCommunicationConnection';
  edges?: Maybe<Array<Maybe<UserCommunicationEdge>>>;
  total?: Maybe<Scalars['Int']>;
};

export type UserCommunicationEdge = {
  __typename?: 'UserCommunicationEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserCommunication>;
};

export enum UserCommunicationOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export enum UserDepositWithdrawalReportOrderBy {
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  Value = 'VALUE',
  ValueDesc = 'VALUE_DESC'
}

export enum UserDepositWithdrawalReportSource {
  Trade = 'TRADE',
  Transaction = 'TRANSACTION',
  UserItem = 'USER_ITEM',
  WaxPeerTrade = 'WAX_PEER_TRADE'
}

export enum UserDepositWithdrawalReportTransactionType {
  Deposit = 'DEPOSIT',
  Withdrawal = 'WITHDRAWAL'
}

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  index?: Maybe<Scalars['Int']>;
  node?: Maybe<User>;
};

export type UserGiveaway = Node & {
  __typename?: 'UserGiveaway';
  createdAt: Scalars['SequelizeDate'];
  giveaway: Giveaway;
  giveawayId: Scalars['ID'];
  id: Scalars['ID'];
  rewardAmount: Scalars['Float'];
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  won: Scalars['Boolean'];
};

export type UserGiveawayConnection = {
  __typename?: 'UserGiveawayConnection';
  edges?: Maybe<Array<Maybe<UserGiveawayEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type UserGiveawayEdge = {
  __typename?: 'UserGiveawayEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserGiveaway>;
};

export enum UserGiveawayOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type UserInviteCode = Node & {
  __typename?: 'UserInviteCode';
  createdAt: Scalars['SequelizeDate'];
  id: Scalars['ID'];
  inviteCode: InviteCode;
  inviteCodeId: Scalars['ID'];
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId: Scalars['ID'];
};

export type UserItem = Node & {
  __typename?: 'UserItem';
  acquiredValue: Scalars['Float'];
  comment?: Maybe<Scalars['String']>;
  consumeValue: Scalars['Float'];
  consumeValueInUserCurrency?: Maybe<Scalars['Float']>;
  consumedAt?: Maybe<Scalars['SequelizeDate']>;
  consumedValue?: Maybe<Scalars['Float']>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  currentValue?: Maybe<Scalars['Float']>;
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  itemVariant: ItemVariant;
  itemVariantId: Scalars['ID'];
  meta?: Maybe<UserItemMeta>;
  order?: Maybe<Order>;
  orderId: Scalars['ID'];
  orderedAt?: Maybe<Scalars['SequelizeDate']>;
  processingAt?: Maybe<Scalars['SequelizeDate']>;
  processor?: Maybe<User>;
  requestedAt?: Maybe<Scalars['SequelizeDate']>;
  shipTo?: Maybe<ShipTo>;
  source: SourceModels;
  sourceId?: Maybe<Scalars['ID']>;
  sourceModel?: Maybe<Scalars['String']>;
  status: UserItemStatus;
  steamOffer?: Maybe<SteamOffer>;
  steamOfferId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId: Scalars['ID'];
  zincOrder?: Maybe<ZincOrder>;
};

export type UserItemConnection = {
  __typename?: 'UserItemConnection';
  edges?: Maybe<Array<Maybe<UserItemEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type UserItemEdge = {
  __typename?: 'UserItemEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserItem>;
};

export type UserItemMeta = {
  __typename?: 'UserItemMeta';
  userIsPvpBot?: Maybe<Scalars['Boolean']>;
};

export enum UserItemOrderBy {
  ConsumedAt = 'CONSUMED_AT',
  ConsumedAtDesc = 'CONSUMED_AT_DESC',
  ConsumedValue = 'CONSUMED_VALUE',
  ConsumedValueDesc = 'CONSUMED_VALUE_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  Value = 'VALUE',
  ValueDesc = 'VALUE_DESC'
}

export enum UserItemSource {
  BoxOpening = 'BOX_OPENING',
  CrashWin = 'CRASH_WIN',
  DiceBet = 'DICE_BET',
  Jackpot = 'JACKPOT',
  MatchBettingWin = 'MATCH_BETTING_WIN',
  PlinkoWin = 'PLINKO_WIN',
  PromoCode = 'PROMO_CODE',
  PvpBoxOpening = 'PVP_BOX_OPENING',
  PvpWin = 'PVP_WIN',
  PvpWinTeamDistribution = 'PVP_WIN_TEAM_DISTRIBUTION',
  Wallet = 'WALLET'
}

export type UserItemStats = {
  __typename?: 'UserItemStats';
  acquiredValue?: Maybe<Scalars['Float']>;
  consumedValue?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  currentValue?: Maybe<Scalars['Float']>;
};

export enum UserItemStatus {
  Available = 'AVAILABLE',
  Consumed = 'CONSUMED',
  Exchanged = 'EXCHANGED',
  Locked = 'LOCKED',
  LockedUntilExternalProviderCallback = 'LOCKED_UNTIL_EXTERNAL_PROVIDER_CALLBACK',
  Ordered = 'ORDERED',
  Processing = 'PROCESSING',
  PvpTeamWinAutoConsumed = 'PVP_TEAM_WIN_AUTO_CONSUMED',
  Received = 'RECEIVED',
  Requested = 'REQUESTED'
}

export type UserMeta = {
  __typename?: 'UserMeta';
  isPvpBot?: Maybe<Scalars['Boolean']>;
};

export enum UserOrderBy {
  Balance = 'BALANCE',
  BalanceDesc = 'BALANCE_DESC',
  BoxOpenings = 'BOX_OPENINGS',
  BoxOpeningsDesc = 'BOX_OPENINGS_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  InventoryValue = 'INVENTORY_VALUE',
  InventoryValueDesc = 'INVENTORY_VALUE_DESC',
  LastDepositAt = 'LAST_DEPOSIT_AT',
  LastDepositAtDesc = 'LAST_DEPOSIT_AT_DESC',
  Tickets = 'TICKETS',
  TicketsDesc = 'TICKETS_DESC',
  TotalCommissionEarnt = 'TOTAL_COMMISSION_EARNT',
  TotalCommissionEarntDesc = 'TOTAL_COMMISSION_EARNT_DESC',
  TotalDeposit = 'TOTAL_DEPOSIT',
  TotalDepositDesc = 'TOTAL_DEPOSIT_DESC',
  TotalWithdraw = 'TOTAL_WITHDRAW',
  TotalWithdrawDesc = 'TOTAL_WITHDRAW_DESC',
  Xp = 'XP',
  XpDesc = 'XP_DESC'
}

export enum UserPermission {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  Support = 'SUPPORT',
  User = 'USER'
}

export type UserPollOption = Node & {
  __typename?: 'UserPollOption';
  createdAt: Scalars['SequelizeDate'];
  id: Scalars['ID'];
  poll: Poll;
  pollId: Scalars['ID'];
  pollOption: PollOption;
  pollOptionId: Scalars['ID'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type UserPollOptionConnection = {
  __typename?: 'UserPollOptionConnection';
  edges?: Maybe<Array<Maybe<UserPollOptionEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type UserPollOptionEdge = {
  __typename?: 'UserPollOptionEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserPollOption>;
};

export enum UserPollOptionOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type UserPreferences = Node & {
  __typename?: 'UserPreferences';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['SequelizeDate']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  createdAt: Scalars['SequelizeDate'];
  gender?: Maybe<Gender>;
  hideProfileStats?: Maybe<Scalars['Boolean']>;
  hideSteamProfile?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId: Scalars['ID'];
};

export type UserProgress = Node & {
  __typename?: 'UserProgress';
  changes?: Maybe<UserProgressChangeConnection>;
  createdAt: Scalars['SequelizeDate'];
  id: Scalars['ID'];
  level: Scalars['Int'];
  nextRequiredXp?: Maybe<Scalars['BigInt']>;
  requiredXp?: Maybe<Scalars['BigInt']>;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  xp: Scalars['BigInt'];
  xpMultiplier: Scalars['Float'];
};


export type UserProgressChangesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserProgressChangeOrderBy>>>;
};


export type UserProgressRequiredXpArgs = {
  level?: InputMaybe<Scalars['Int']>;
};

export type UserProgressChange = Node & {
  __typename?: 'UserProgressChange';
  createdAt: Scalars['SequelizeDate'];
  externalId: Scalars['ID'];
  id: Scalars['ID'];
  source: UserProgressSource;
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
  valueAfter: Scalars['Int'];
  valueChange: Scalars['Int'];
};

export type UserProgressChangeConnection = {
  __typename?: 'UserProgressChangeConnection';
  edges?: Maybe<Array<Maybe<UserProgressChangeEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type UserProgressChangeEdge = {
  __typename?: 'UserProgressChangeEdge';
  cursor: Scalars['String'];
  index?: Maybe<Scalars['Int']>;
  node?: Maybe<UserProgressChange>;
};

export enum UserProgressChangeOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type UserProgressChangeStats = {
  __typename?: 'UserProgressChangeStats';
  source?: Maybe<UserProgressSource>;
  totalValueChange?: Maybe<Scalars['Int']>;
};

export enum UserProgressChangeSummaryOrderBy {
  Deposits = 'DEPOSITS',
  DepositsDesc = 'DEPOSITS_DESC',
  Games = 'GAMES',
  GamesDesc = 'GAMES_DESC',
  Misc = 'MISC',
  MiscDesc = 'MISC_DESC'
}

export type UserProgressChangesSummary = {
  __typename?: 'UserProgressChangesSummary';
  deposits: Scalars['Float'];
  games: Scalars['Float'];
  misc: Scalars['Float'];
  userId: Scalars['ID'];
};

export type UserProgressChangesSummaryConnection = {
  __typename?: 'UserProgressChangesSummaryConnection';
  edges?: Maybe<Array<Maybe<UserProgressChangesSummaryEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type UserProgressChangesSummaryEdge = {
  __typename?: 'UserProgressChangesSummaryEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserProgressChangesSummary>;
};

export enum UserProgressSource {
  AchievementClaim = 'ACHIEVEMENT_CLAIM',
  Alteration = 'ALTERATION',
  BoxPurchase = 'BOX_PURCHASE',
  CrashBet = 'CRASH_BET',
  DiceBet = 'DICE_BET',
  GameBet = 'GAME_BET',
  ItemSell = 'ITEM_SELL',
  MatchBettingSlipBet = 'MATCH_BETTING_SLIP_BET',
  PlinkoBet = 'PLINKO_BET',
  PvpBet = 'PVP_BET',
  PvpBoxGameBet = 'PVP_BOX_GAME_BET',
  XpPurchase = 'XP_PURCHASE'
}

export type UserPromoCode = {
  __typename?: 'UserPromoCode';
  createdAt: Scalars['SequelizeDate'];
  meta?: Maybe<Array<UserPromoCodeMeta>>;
  promoCode: PromoCode;
  promoCodeId: Scalars['ID'];
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
};

export type UserPromoCodeConnection = {
  __typename?: 'UserPromoCodeConnection';
  edges?: Maybe<Array<Maybe<UserPromoCodeEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type UserPromoCodeEdge = {
  __typename?: 'UserPromoCodeEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserPromoCode>;
};

export type UserPromoCodeMeta = {
  __typename?: 'UserPromoCodeMeta';
  balance: Scalars['Float'];
  currency: Scalars['String'];
};

export enum UserPromoCodeOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC'
}

export type UserRequirements = {
  __typename?: 'UserRequirements';
  mustBeInTeam?: Maybe<Scalars['Boolean']>;
};

export type UserRequirementsInput = {
  teamMember?: InputMaybe<Scalars['Boolean']>;
};

export type UserReward = {
  __typename?: 'UserReward';
  ar: Scalars['Float'];
  difference: Scalars['Float'];
  expected: Scalars['Float'];
  expired: Scalars['Float'];
  ggr: Scalars['Float'];
  gratuityRewards: Scalars['Float'];
  manualRewards: Scalars['Float'];
  pnl: Scalars['Float'];
  pnlWithRewards: Scalars['Float'];
  rakebackValue: Scalars['Float'];
  sponsorshipRewards: Scalars['Float'];
  supportRewards: Scalars['Float'];
  user: User;
  wager: Scalars['Float'];
};

export enum UserRole {
  AffiliateAdmin = 'AFFILIATE_ADMIN',
  AffiliateViewer = 'AFFILIATE_VIEWER',
  AlterBalance = 'ALTER_BALANCE',
  AlterBalanceNoLimit = 'ALTER_BALANCE_NO_LIMIT',
  AssetAdmin = 'ASSET_ADMIN',
  AssetViewer = 'ASSET_VIEWER',
  AuditLogViewer = 'AUDIT_LOG_VIEWER',
  BoxAdmin = 'BOX_ADMIN',
  BoxCreator = 'BOX_CREATOR',
  BoxEditor = 'BOX_EDITOR',
  BoxOpeningViewer = 'BOX_OPENING_VIEWER',
  BoxViewer = 'BOX_VIEWER',
  CasinoGameAdmin = 'CASINO_GAME_ADMIN',
  DashboardViewer = 'DASHBOARD_VIEWER',
  Debugger = 'DEBUGGER',
  Developer = 'DEVELOPER',
  DigitalCodeViewer = 'DIGITAL_CODE_VIEWER',
  ExchangeViewer = 'EXCHANGE_VIEWER',
  GeoTrackViewer = 'GEO_TRACK_VIEWER',
  ItemAdmin = 'ITEM_ADMIN',
  ItemViewer = 'ITEM_VIEWER',
  JackpotAdmin = 'JACKPOT_ADMIN',
  JackpotPayer = 'JACKPOT_PAYER',
  Manager = 'MANAGER',
  MatchBettingAdmin = 'MATCH_BETTING_ADMIN',
  MatchBettingDashboardViewer = 'MATCH_BETTING_DASHBOARD_VIEWER',
  MatchBettingFraud = 'MATCH_BETTING_FRAUD',
  MatchBettingProcessor = 'MATCH_BETTING_PROCESSOR',
  MatchBettingUser = 'MATCH_BETTING_USER',
  Moderator = 'MODERATOR',
  OrderAdmin = 'ORDER_ADMIN',
  OrderViewer = 'ORDER_VIEWER',
  Owner = 'OWNER',
  PaymentAdmin = 'PAYMENT_ADMIN',
  PollAdmin = 'POLL_ADMIN',
  PollViewer = 'POLL_VIEWER',
  PromotionAdmin = 'PROMOTION_ADMIN',
  PromoCodeViewer = 'PROMO_CODE_VIEWER',
  PvpBotViewer = 'PVP_BOT_VIEWER',
  RiskFraud = 'RISK_FRAUD',
  Staff = 'STAFF',
  SteamOfferViewer = 'STEAM_OFFER_VIEWER',
  Support = 'SUPPORT',
  SupportPlus = 'SUPPORT_PLUS',
  TileOpeningViewer = 'TILE_OPENING_VIEWER',
  TileSettingAdmin = 'TILE_SETTING_ADMIN',
  TradeViewer = 'TRADE_VIEWER',
  TransactionViewer = 'TRANSACTION_VIEWER',
  User = 'USER',
  UserItemViewer = 'USER_ITEM_VIEWER',
  UserPromoCodeViewer = 'USER_PROMO_CODE_VIEWER',
  UserTierAdmin = 'USER_TIER_ADMIN',
  UserTwoFactorAdmin = 'USER_TWO_FACTOR_ADMIN',
  UserViewer = 'USER_VIEWER',
  WalletChangeSummaryViewer = 'WALLET_CHANGE_SUMMARY_VIEWER',
  WalletChangeViewer = 'WALLET_CHANGE_VIEWER',
  WalletViewer = 'WALLET_VIEWER',
  WaxpeerTradeViewer = 'WAXPEER_TRADE_VIEWER',
  WithdrawalRequestViewer = 'WITHDRAWAL_REQUEST_VIEWER',
  ZincOrderViewer = 'ZINC_ORDER_VIEWER'
}

export type UserStat = Node & {
  __typename?: 'UserStat';
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  dateFrom?: Maybe<Scalars['SequelizeDate']>;
  dateTo?: Maybe<Scalars['SequelizeDate']>;
  excluded: Scalars['Boolean'];
  externalId?: Maybe<Scalars['String']>;
  externalModel: SourceModels;
  id: Scalars['ID'];
  market?: Maybe<Market>;
  marketId: Scalars['ID'];
  stat: UserStatStat;
  type: UserStatType;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
  value: Scalars['Float'];
};

export type UserStatConnection = {
  __typename?: 'UserStatConnection';
  edges?: Maybe<Array<Maybe<UserStatEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type UserStatEdge = {
  __typename?: 'UserStatEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserStat>;
};

export enum UserStatOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DateFrom = 'DATE_FROM',
  DateFromDesc = 'DATE_FROM_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Value = 'VALUE',
  ValueDesc = 'VALUE_DESC'
}

export enum UserStatStat {
  HighestBet = 'HIGHEST_BET',
  HighestBetLoss = 'HIGHEST_BET_LOSS',
  HighestCrashMultiplier = 'HIGHEST_CRASH_MULTIPLIER',
  HighestCrashWin = 'HIGHEST_CRASH_WIN',
  HighestRouletteGreenWin = 'HIGHEST_ROULETTE_GREEN_WIN',
  HighestRouletteWin = 'HIGHEST_ROULETTE_WIN',
  HighestUnboxingWin = 'HIGHEST_UNBOXING_WIN',
  TotalBoxesOpened = 'TOTAL_BOXES_OPENED',
  TotalCommission = 'TOTAL_COMMISSION',
  TotalCommissionEarnt = 'TOTAL_COMMISSION_EARNT',
  TotalDeposited = 'TOTAL_DEPOSITED',
  TotalProfit = 'TOTAL_PROFIT',
  TotalProfitDailyFree = 'TOTAL_PROFIT_DAILY_FREE',
  TotalProfitGameJackpot = 'TOTAL_PROFIT_GAME_JACKPOT',
  TotalWagered = 'TOTAL_WAGERED',
  TotalWageredCrash = 'TOTAL_WAGERED_CRASH',
  TotalWageredDice = 'TOTAL_WAGERED_DICE',
  TotalWageredMatchBetting = 'TOTAL_WAGERED_MATCH_BETTING',
  TotalWageredPlinko = 'TOTAL_WAGERED_PLINKO',
  TotalWageredPvp = 'TOTAL_WAGERED_PVP',
  TotalWageredRoulette = 'TOTAL_WAGERED_ROULETTE',
  TotalWageredUnboxing = 'TOTAL_WAGERED_UNBOXING',
  TotalWithdrawn = 'TOTAL_WITHDRAWN'
}

export enum UserStatType {
  AllTime = 'ALL_TIME',
  Daily = 'DAILY',
  Weekly = 'WEEKLY'
}

export type UserStatistics = {
  __typename?: 'UserStatistics';
  affiliateRewards: AffiliateRewards;
  allTimeStatistics?: Maybe<UserStatistics>;
  alterations: Alterations;
  bonusCurrency: BonusCurrency;
  cashPlayMetrics: CashPlayMetrics;
  gamesProfit: GameProfit;
  lifeTimeCash: LifeTimeCash;
  playerRevenue: PlayerRevenue;
  shortTermCash: ShortTermCash;
  user: User;
};

export type UserTier = Node & {
  __typename?: 'UserTier';
  arPercentage?: Maybe<Scalars['Float']>;
  asset?: Maybe<Asset>;
  assetId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['SequelizeDate']>;
  cursor: Scalars['String'];
  ggr?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  node?: Maybe<UserTier>;
  rakeback?: Maybe<Scalars['Float']>;
  rakebackBetAmountForInstantRankUp?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Int']>;
  rankUpChance?: Maybe<Scalars['Float']>;
  rewards?: Maybe<Array<UserTierReward>>;
  updatedAt?: Maybe<Scalars['SequelizeDate']>;
  userCount?: Maybe<Scalars['Int']>;
  userTierAssets?: Maybe<Array<UserTierAsset>>;
};


export type UserTierRankUpChanceArgs = {
  rakebackBet?: InputMaybe<Scalars['Float']>;
};

export type UserTierAsset = Node & {
  __typename?: 'UserTierAsset';
  asset?: Maybe<Asset>;
  assetId: Scalars['ID'];
  createdAt: Scalars['SequelizeDate'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  rakebackPrice: Scalars['Float'];
  updatedAt: Scalars['SequelizeDate'];
  userTier?: Maybe<UserTier>;
  userTierId: Scalars['ID'];
};

export type UserTierAssetConnection = {
  __typename?: 'UserTierAssetConnection';
  edges?: Maybe<Array<Maybe<UserTierAssetEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type UserTierAssetEdge = {
  __typename?: 'UserTierAssetEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserTierAsset>;
};

export enum UserTierAssetOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type UserTierConnection = {
  __typename?: 'UserTierConnection';
  edges?: Maybe<Array<Maybe<UserTierEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type UserTierEdge = {
  __typename?: 'UserTierEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserTier>;
};

export enum UserTierOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Rank = 'RANK',
  RankDesc = 'RANK_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type UserTierReward = {
  __typename?: 'UserTierReward';
  rewardPercentage?: Maybe<Scalars['Float']>;
  type?: Maybe<UserTierRewardType>;
};

export enum UserTierRewardType {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY'
}

export enum UserTradeBannedType {
  Internal = 'INTERNAL',
  Steam = 'STEAM'
}

export type UserTwoFactorBackupCode = {
  __typename?: 'UserTwoFactorBackupCode';
  code: Scalars['String'];
  createdAt: Scalars['SequelizeDate'];
  deletedAt?: Maybe<Scalars['SequelizeDate']>;
  updatedAt: Scalars['SequelizeDate'];
};

export enum UserWithdrawalRestrictions {
  NoRestrictions = 'NO_RESTRICTIONS',
  Pending = 'PENDING',
  Restricted = 'RESTRICTED'
}

export enum VerificationStatus {
  Required = 'REQUIRED',
  UnderLimit = 'UNDER_LIMIT',
  Verified = 'VERIFIED'
}

export type VerifyEmailInput = {
  hash: Scalars['String'];
  recaptcha: Scalars['String'];
  visualRecaptcha?: InputMaybe<Scalars['String']>;
};

export type VerifyEmailPayload = {
  __typename?: 'VerifyEmailPayload';
  user?: Maybe<User>;
};

export type VideoGameMatchBettingSlipStats = {
  __typename?: 'VideoGameMatchBettingSlipStats';
  stats: MatchBettingSlipStats;
  videoGame: MatchBettingVideoGame;
};

export type WakeUpSteamBotPayload = {
  __typename?: 'WakeUpSteamBotPayload';
  steamBot?: Maybe<SteamBot>;
};

export type Wallet = Node & {
  __typename?: 'Wallet';
  amount?: Maybe<Scalars['Float']>;
  changes?: Maybe<WalletChangeConnection>;
  claimableFrom?: Maybe<Scalars['SequelizeDate']>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  expiresAt?: Maybe<Scalars['SequelizeDate']>;
  id: Scalars['ID'];
  name?: Maybe<WalletType>;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};


export type WalletChangesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['PaginationAmount']>;
  last?: InputMaybe<Scalars['PaginationAmount']>;
  orderBy?: InputMaybe<Array<InputMaybe<WalletChangeOrderBy>>>;
};

export type WalletChange = Node & {
  __typename?: 'WalletChange';
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  externalId?: Maybe<Scalars['ID']>;
  externalItem: SourceModels;
  id: Scalars['ID'];
  notes?: Maybe<Array<Note>>;
  type: WalletChangeType;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
  valueAfter: Scalars['Decimal'];
  valueChange: Scalars['Decimal'];
  wallet?: Maybe<Wallet>;
  walletId?: Maybe<Scalars['ID']>;
};

export type WalletChangeConnection = {
  __typename?: 'WalletChangeConnection';
  edges?: Maybe<Array<Maybe<WalletChangeEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type WalletChangeEdge = {
  __typename?: 'WalletChangeEdge';
  cursor: Scalars['String'];
  index?: Maybe<Scalars['Int']>;
  node?: Maybe<WalletChange>;
};

export enum WalletChangeOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type WalletChangeStats = {
  __typename?: 'WalletChangeStats';
  currency?: Maybe<Scalars['String']>;
  totalValueChange?: Maybe<Scalars['Float']>;
  type?: Maybe<WalletChangeType>;
  walletType?: Maybe<Scalars['String']>;
};

export enum WalletChangeType {
  AchievementClaim = 'ACHIEVEMENT_CLAIM',
  AdditionalRewardsDaily = 'ADDITIONAL_REWARDS_DAILY',
  AdditionalRewardsDailyClaimed = 'ADDITIONAL_REWARDS_DAILY_CLAIMED',
  AdditionalRewardsMonthly = 'ADDITIONAL_REWARDS_MONTHLY',
  AdditionalRewardsMonthlyClaimed = 'ADDITIONAL_REWARDS_MONTHLY_CLAIMED',
  AdditionalRewardsWeekly = 'ADDITIONAL_REWARDS_WEEKLY',
  AdditionalRewardsWeeklyClaimed = 'ADDITIONAL_REWARDS_WEEKLY_CLAIMED',
  AffiliateLoan = 'AFFILIATE_LOAN',
  Alteration = 'ALTERATION',
  BoxOpen = 'BOX_OPEN',
  BoxPurchase = 'BOX_PURCHASE',
  BoxRefund = 'BOX_REFUND',
  BoxWin = 'BOX_WIN',
  CasinoGameBet = 'CASINO_GAME_BET',
  CasinoGameRollback = 'CASINO_GAME_ROLLBACK',
  CasinoGameWin = 'CASINO_GAME_WIN',
  Commission = 'COMMISSION',
  CommissionClaimed = 'COMMISSION_CLAIMED',
  Compensation = 'COMPENSATION',
  CompensationStreamer = 'COMPENSATION_STREAMER',
  CrashBet = 'CRASH_BET',
  CrashRefund = 'CRASH_REFUND',
  CrashWin = 'CRASH_WIN',
  CurrencyConversion = 'CURRENCY_CONVERSION',
  DiceBet = 'DICE_BET',
  DiceJackpot = 'DICE_JACKPOT',
  DiceUpgradeBet = 'DICE_UPGRADE_BET',
  DiceUpgradeWin = 'DICE_UPGRADE_WIN',
  DiceWin = 'DICE_WIN',
  GameBet = 'GAME_BET',
  GameJackpot = 'GAME_JACKPOT',
  GameWin = 'GAME_WIN',
  GemstoneGameWin = 'GEMSTONE_GAME_WIN',
  GiftCard = 'GIFT_CARD',
  GiveawayWin = 'GIVEAWAY_WIN',
  Gratuity = 'GRATUITY',
  ItemExchange = 'ITEM_EXCHANGE',
  ItemWithdraw = 'ITEM_WITHDRAW',
  JackpotPayout = 'JACKPOT_PAYOUT',
  ManualReward = 'MANUAL_REWARD',
  MatchBettingSlipBet = 'MATCH_BETTING_SLIP_BET',
  MatchBettingSlipRollback = 'MATCH_BETTING_SLIP_ROLLBACK',
  MatchBettingSlipWin = 'MATCH_BETTING_SLIP_WIN',
  Payment = 'PAYMENT',
  PaymentBonus = 'PAYMENT_BONUS',
  PaymentWithdrawal = 'PAYMENT_WITHDRAWAL',
  PlinkoBet = 'PLINKO_BET',
  PlinkoWin = 'PLINKO_WIN',
  PromoCode = 'PROMO_CODE',
  PvpBet = 'PVP_BET',
  PvpBetRefund = 'PVP_BET_REFUND',
  PvpBotTopUp = 'PVP_BOT_TOP_UP',
  PvpBoxGameBet = 'PVP_BOX_GAME_BET',
  PvpWin = 'PVP_WIN',
  Rakeback = 'RAKEBACK',
  RakebackAsset = 'RAKEBACK_ASSET',
  RakebackClaimed = 'RAKEBACK_CLAIMED',
  RankUpGameBet = 'RANK_UP_GAME_BET',
  Sponsorship = 'SPONSORSHIP',
  Support = 'SUPPORT',
  TileOpening = 'TILE_OPENING',
  TradeDeposit = 'TRADE_DEPOSIT',
  TradeJoin = 'TRADE_JOIN',
  Transfer = 'TRANSFER',
  UserImport = 'USER_IMPORT',
  UserItemExchangeRevert = 'USER_ITEM_EXCHANGE_REVERT',
  WalletMove = 'WALLET_MOVE',
  WaxPeerTrade = 'WAX_PEER_TRADE',
  XpPurchase = 'XP_PURCHASE',
  ZbtTrade = 'ZBT_TRADE'
}

export type WalletChangesSummary = {
  __typename?: 'WalletChangesSummary';
  currency: Scalars['String'];
  deposits: Scalars['Float'];
  exchanges: Scalars['Float'];
  games: Scalars['Float'];
  misc: Scalars['Float'];
  userId: Scalars['ID'];
  withdraws: Scalars['Float'];
};

export type WalletChangesSummaryConnection = {
  __typename?: 'WalletChangesSummaryConnection';
  edges?: Maybe<Array<Maybe<WalletChangesSummaryEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type WalletChangesSummaryEdge = {
  __typename?: 'WalletChangesSummaryEdge';
  cursor: Scalars['String'];
  node?: Maybe<WalletChangesSummary>;
};

export enum WalletChangesSummaryOrderBy {
  Deposits = 'DEPOSITS',
  DepositsDesc = 'DEPOSITS_DESC',
  Exchanges = 'EXCHANGES',
  ExchangesDesc = 'EXCHANGES_DESC',
  Games = 'GAMES',
  GamesDesc = 'GAMES_DESC',
  Misc = 'MISC',
  MiscDesc = 'MISC_DESC',
  Withdraws = 'WITHDRAWS',
  WithdrawsDesc = 'WITHDRAWS_DESC'
}

export type WalletConnection = {
  __typename?: 'WalletConnection';
  edges?: Maybe<Array<Maybe<WalletEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type WalletEdge = {
  __typename?: 'WalletEdge';
  cursor: Scalars['String'];
  node?: Maybe<Wallet>;
};

export enum WalletOrderBy {
  Amount = 'AMOUNT',
  AmountDesc = 'AMOUNT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type WalletStats = {
  __typename?: 'WalletStats';
  currency: Scalars['String'];
  totalValue: Scalars['Float'];
};

export enum WalletType {
  AdditionalRewardsDaily = 'ADDITIONAL_REWARDS_DAILY',
  AdditionalRewardsMonthly = 'ADDITIONAL_REWARDS_MONTHLY',
  AdditionalRewardsWeekly = 'ADDITIONAL_REWARDS_WEEKLY',
  AffiliateEarnings = 'AFFILIATE_EARNINGS',
  Bonus = 'BONUS',
  Gemstone = 'GEMSTONE',
  GemstoneShiny = 'GEMSTONE_SHINY',
  Main = 'MAIN',
  Rakeback = 'RAKEBACK'
}

export type WaxPeerItem = {
  __typename?: 'WaxPeerItem';
  float?: Maybe<Scalars['String']>;
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemVariant: ItemVariant;
  value: Scalars['Float'];
};

export type WaxPeerItemConnection = {
  __typename?: 'WaxPeerItemConnection';
  edges?: Maybe<Array<Maybe<WaxPeerItemEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type WaxPeerItemEdge = {
  __typename?: 'WaxPeerItemEdge';
  cursor: Scalars['String'];
  node?: Maybe<WaxPeerItem>;
};

export enum WaxPeerItemOrderBy {
  BestDealsAsc = 'BEST_DEALS_ASC',
  BestDealsDesc = 'BEST_DEALS_DESC',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC'
}

export type WaxPeerTrade = Node & {
  __typename?: 'WaxPeerTrade';
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  expiresAt?: Maybe<Scalars['SequelizeDate']>;
  externalId?: Maybe<Scalars['String']>;
  externalItemId?: Maybe<Scalars['String']>;
  externalMessage?: Maybe<Scalars['String']>;
  externalStatus?: Maybe<WaxPeerTradeExternalStatus>;
  float?: Maybe<Scalars['String']>;
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isOfferSent: Scalars['Boolean'];
  itemVariant?: Maybe<ItemVariant>;
  itemVariantId: Scalars['ID'];
  partner?: Maybe<Scalars['String']>;
  status: WaxPeerTradeStatus;
  token?: Maybe<Scalars['String']>;
  tradeOfferId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId: Scalars['ID'];
  value: Scalars['Float'];
  valuePaid?: Maybe<Scalars['Float']>;
};

export type WaxPeerTradeConnection = {
  __typename?: 'WaxPeerTradeConnection';
  edges?: Maybe<Array<Maybe<WaxPeerTradeEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type WaxPeerTradeEdge = {
  __typename?: 'WaxPeerTradeEdge';
  cursor: Scalars['String'];
  node?: Maybe<WaxPeerTrade>;
};

export enum WaxPeerTradeExternalStatus {
  Completed = 'COMPLETED',
  DeclinedAndRefunded = 'DECLINED_AND_REFUNDED',
  Exception = 'EXCEPTION',
  Processing = 'PROCESSING',
  Sent = 'SENT',
  Waiting = 'WAITING',
  WaitingForSellerConfirmation = 'WAITING_FOR_SELLER_CONFIRMATION'
}

export enum WaxPeerTradeOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  Value = 'VALUE',
  ValueDesc = 'VALUE_DESC'
}

export type WaxPeerTradeStats = {
  __typename?: 'WaxPeerTradeStats';
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  value?: Maybe<Scalars['Float']>;
  valuePaid?: Maybe<Scalars['Float']>;
};

export enum WaxPeerTradeStatus {
  Completed = 'COMPLETED',
  Created = 'CREATED',
  Failed = 'FAILED',
  Processing = 'PROCESSING'
}

export type WinGemstoneSubscription = {
  __typename?: 'WinGemstoneSubscription';
  gemstone?: Maybe<GemstoneGame>;
};

export type Wishlist = Node & {
  __typename?: 'Wishlist';
  baseCurrency: Scalars['String'];
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  id: Scalars['ID'];
  itemVariants: Array<WishlistItemVariant>;
  jackpotId?: Maybe<Scalars['ID']>;
  totalValue: Scalars['Float'];
  totalValueBase: Scalars['Float'];
  updatedAt: Scalars['SequelizeDate'];
  user: User;
  userId: Scalars['ID'];
};

export type WishlistConnection = {
  __typename?: 'WishlistConnection';
  edges?: Maybe<Array<Maybe<WishlistEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type WishlistEdge = {
  __typename?: 'WishlistEdge';
  cursor: Scalars['String'];
  node?: Maybe<Wishlist>;
};

export type WishlistItemVariant = {
  __typename?: 'WishlistItemVariant';
  itemVariant: ItemVariant;
  itemVariantId: Scalars['ID'];
  value: Scalars['Float'];
};

export enum WishlistOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type WithdrawalRequest = Node & {
  __typename?: 'WithdrawalRequest';
  amount: Scalars['Float'];
  approvedHistory?: Maybe<CreateWithdrawalHistory>;
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  id: Scalars['ID'];
  processor?: Maybe<User>;
  processorId?: Maybe<Scalars['ID']>;
  status: WithdrawalRequestStatus;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId: Scalars['ID'];
};

export type WithdrawalRequestConnection = {
  __typename?: 'WithdrawalRequestConnection';
  edges?: Maybe<Array<Maybe<WithdrawalRequestEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type WithdrawalRequestEdge = {
  __typename?: 'WithdrawalRequestEdge';
  cursor: Scalars['String'];
  node?: Maybe<WithdrawalRequest>;
};

export enum WithdrawalRequestOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum WithdrawalRequestStatus {
  Approved = 'APPROVED',
  Denied = 'DENIED',
  Pending = 'PENDING'
}

export type ZbtMarketplaceItem = {
  __typename?: 'ZbtMarketplaceItem';
  float?: Maybe<Scalars['String']>;
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemVariant: ItemVariant;
  quantity: Scalars['Int'];
  value: Scalars['Float'];
};

export type ZbtMarketplaceItemConnection = {
  __typename?: 'ZbtMarketplaceItemConnection';
  edges?: Maybe<Array<Maybe<ZbtMarketplaceItemEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type ZbtMarketplaceItemEdge = {
  __typename?: 'ZbtMarketplaceItemEdge';
  cursor: Scalars['String'];
  node?: Maybe<ZbtMarketplaceItem>;
};

export enum ZbtMarketplaceItemOrderBy {
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC'
}

export type ZbtTrade = Node & {
  __typename?: 'ZbtTrade';
  createdAt: Scalars['SequelizeDate'];
  currency: Scalars['String'];
  externalId?: Maybe<Scalars['String']>;
  externalItemId?: Maybe<Scalars['String']>;
  externalMessage?: Maybe<Scalars['String']>;
  externalStatus?: Maybe<ZbtTradeExternalStatus>;
  float?: Maybe<Scalars['String']>;
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isOfferSent: Scalars['Boolean'];
  itemVariant?: Maybe<ItemVariant>;
  itemVariantId: Scalars['ID'];
  status: ZbtTradeStatus;
  steamAppName: SteamAppName;
  steamTradeUrl: Scalars['String'];
  tradeOfferId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['SequelizeDate'];
  user?: Maybe<User>;
  userId: Scalars['ID'];
  value: Scalars['Float'];
  valuePaid?: Maybe<Scalars['Float']>;
};

export type ZbtTradeConnection = {
  __typename?: 'ZbtTradeConnection';
  edges?: Maybe<Array<Maybe<ZbtTradeEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type ZbtTradeEdge = {
  __typename?: 'ZbtTradeEdge';
  cursor: Scalars['String'];
  node?: Maybe<ZbtTrade>;
};

export enum ZbtTradeExternalStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Receiving = 'RECEIVING',
  WaitingForDelivery = 'WAITING_FOR_DELIVERY',
  WaitingForPayment = 'WAITING_FOR_PAYMENT',
  WaitingForReceipt = 'WAITING_FOR_RECEIPT'
}

export enum ZbtTradeOrderBy {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Value = 'VALUE',
  ValueDesc = 'VALUE_DESC'
}

export type ZbtTradeStats = {
  __typename?: 'ZbtTradeStats';
  count?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  value?: Maybe<Scalars['Float']>;
  valuePaid?: Maybe<Scalars['Float']>;
};

export enum ZbtTradeStatus {
  Completed = 'COMPLETED',
  Created = 'CREATED',
  Failed = 'FAILED',
  Processing = 'PROCESSING'
}

export type ZincMerchantOrder = {
  __typename?: 'ZincMerchantOrder';
  account?: Maybe<Scalars['String']>;
  cancelledAt?: Maybe<Scalars['SequelizeDate']>;
  deliveryDate?: Maybe<Scalars['String']>;
  merchant?: Maybe<Scalars['String']>;
  merchantOrderId?: Maybe<Scalars['String']>;
  placedAt?: Maybe<Scalars['SequelizeDate']>;
  productIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  tracking?: Maybe<Array<Maybe<Scalars['String']>>>;
  trackingUrl?: Maybe<Scalars['String']>;
};

export type ZincOrder = Node & {
  __typename?: 'ZincOrder';
  createdAt: Scalars['SequelizeDate'];
  creator?: Maybe<User>;
  creatorId: Scalars['ID'];
  giftMessage: Scalars['String'];
  id: Scalars['ID'];
  maxOrderCost: Scalars['Float'];
  maxShippingCost: Scalars['Float'];
  maxShippingDays: Scalars['Float'];
  merchantOrders: Array<ZincMerchantOrder>;
  order: Order;
  orderId: Scalars['ID'];
  primeOptout?: Maybe<Scalars['Boolean']>;
  priorityBid?: Maybe<Scalars['Int']>;
  requestId: Scalars['String'];
  /** @deprecated Use retailerId */
  retailer?: Maybe<Scalars['String']>;
  retailerId: Scalars['ID'];
  retailerObject?: Maybe<RetailerType>;
  shippingPriority: ShippingPriority;
  status: ZincOrderStatus;
  updatedAt: Scalars['SequelizeDate'];
};

export type ZincOrderConnection = {
  __typename?: 'ZincOrderConnection';
  edges?: Maybe<Array<Maybe<ZincOrderEdge>>>;
  pageInfo: PageInfo;
  total?: Maybe<Scalars['Int']>;
};

export type ZincOrderEdge = {
  __typename?: 'ZincOrderEdge';
  cursor: Scalars['String'];
  node?: Maybe<ZincOrder>;
};

export enum ZincOrderOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum ZincOrderStatus {
  Aborted = 'ABORTED',
  Aborting = 'ABORTING',
  Cancelled = 'CANCELLED',
  Cancelling = 'CANCELLING',
  Created = 'CREATED',
  Failed = 'FAILED',
  Ordered = 'ORDERED',
  Ordering = 'ORDERING'
}

export type ZincProductSearchInput = {
  page: Scalars['Int'];
  query: Scalars['String'];
  /** @deprecated Use retailerId */
  retailer?: InputMaybe<Retailer>;
  retailerId?: InputMaybe<Scalars['ID']>;
};

export type ZincProductSearchItem = {
  __typename?: 'ZincProductSearchItem';
  fresh?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  reviewCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type ZincProductSearchPayload = {
  __typename?: 'ZincProductSearchPayload';
  products: Array<ZincProductSearchItem>;
};
